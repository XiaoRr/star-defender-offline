// Verifies the resource-pack pipeline: while pack N is being unpacked,
// pack N+1 must already be downloading, and both phases must emit progress.
const test = require("node:test");
const assert = require("node:assert");
const fs = require("node:fs");
const vm = require("node:vm");
const crypto = require("node:crypto");

function buildPack(files) {
  // files: array of [path, Buffer]
  const names = files.map(([file]) => file);
  const bodies = files.map(([, body]) => body);
  const offsets = [];
  let offset = 0;
  for (const body of bodies) {
    offsets.push(offset);
    offset += body.length;
  }
  const entries = names.map((file, i) => [file, offsets[i], bodies[i].length]);
  const header = Buffer.from(JSON.stringify(entries), "utf8");
  const prefix = Buffer.alloc(4);
  prefix.writeUInt32LE(header.length, 0);
  const sha256 = crypto
    .createHash("sha256")
    .update(Buffer.concat([prefix, header, ...bodies]))
    .digest("hex");
  return {
    manifest: {
      file: `packs/${sha256.slice(0, 16)}.bin.gz`,
      sha256,
      bytes: prefix.length + header.length + offset,
      files: entries.length,
      paths: names,
    },
    bytes: Buffer.concat([prefix, header, ...bodies]),
  };
}

function makeSandbox(built) {
  const events = [];
  const shows = [];
  const stored = new Map();
  const packs = built.map((pack) => pack.manifest);
  const bodies = new Map(
    built.map((pack) => ["/" + pack.manifest.file, pack.bytes]),
  );

  class FakeResponse {
    constructor(input) {
      this.input = input;
    }
    async arrayBuffer() {
      if (typeof this.input === "string")
        return new TextEncoder().encode(this.input).buffer;
      const stream = this.input.getReader ? this.input : this.input.stream();
      const reader = stream.getReader();
      const chunks = [];
      let total = 0;
      for (;;) {
        const { value, done } = await reader.read();
        if (done) break;
        chunks.push(value);
        total += value.length;
      }
      const out = new Uint8Array(total);
      let at = 0;
      for (const chunk of chunks) {
        out.set(chunk, at);
        at += chunk.length;
      }
      return out.buffer;
    }
  }

  const sandbox = {
    URL,
    Blob,
    TextDecoder,
    JSON,
    Promise,
    console,
    setTimeout,
    TransformStream,
    AbortController,
    Response: FakeResponse,
    DecompressionStream: class {
      constructor() {
        const pass = new TransformStream();
        this.readable = pass.readable;
        this.writable = pass.writable;
      }
    },
    crypto: { subtle: crypto.webcrypto.subtle },
    isSecureContext: true,
    document: { baseURI: "https://game.test/" },
    navigator: {
      serviceWorker: {
        register: async () => ({}),
        ready: Promise.resolve(),
        controller: {},
        addEventListener() {},
        removeEventListener() {},
      },
    },
    caches: {
      open: async () => ({
        keys: async () => [...stored.keys()].map(url => ({ url })),
        match: async (url) => (stored.has(String(url)) ? new Response("hit") : undefined),
        put: async (url, res) => {
          const buffer = Buffer.from(await res.arrayBuffer());
          stored.set(String(url), buffer);
          events.push(["put", String(url).replace("https://game.test/", "")]);
        },
      }),
    },
    fetch: async (url) => {
      const path = new URL(url).pathname;
      events.push(["fetch-start", path]);
      const body = bodies.get(path);
      assert.ok(body, "unexpected fetch: " + path);
      let at = 0;
      return {
        ok: true,
        body: {
          getReader() {
            return {
              read: async () => {
                if (at >= body.length) return { done: true };
                const chunk = body.subarray(at, at + 5);
                at += chunk.length;
                return { value: new Uint8Array(chunk), done: false };
              },
            };
          },
        },
      };
    },
  };
  sandbox.window = sandbox;
  return { sandbox, events, shows, stored };
}

test("packs download and unpack in a pipelined fashion with visible progress", async () => {
  const source = fs.readFileSync("offline-resource-packs.js", "utf8");
  const filesOf = (tag, count) =>
    Array.from({ length: count }, (_, i) => [
      `assets/resources/native/${tag}/f${i}.png`,
      Buffer.from(`${tag}-${i}`.repeat(8)),
    ]);
  const built = [
    buildPack(filesOf("aa", 3)),
    buildPack(filesOf("bb", 3)),
    buildPack(filesOf("cc", 3)),
  ];
  const packs = built.map((pack) => pack.manifest);

  const { sandbox, events, shows, stored } = makeSandbox(built);
  sandbox.__COMBAT_PACKS = { version: 1, packs };
  vm.createContext(sandbox);
  vm.runInContext(source, sandbox, { filename: "offline-resource-packs.js" });

  await sandbox.offlineResourcePacks.prepare(
    (message) => shows.push(message),
    () => {},
  );

  // Every pack fetched exactly once, every file and marker stored.
  const fetches = events.filter(([kind]) => kind === "fetch-start");
  assert.strictEqual(fetches.length, packs.length);
  assert.strictEqual(stored.size, packs.length * 3 + packs.length);

  // Pipeline: the second download must start before the first unpack finishes.
  const secondFetch = events.findIndex(
    ([kind, path]) => kind === "fetch-start" && path.includes(packs[1].file),
  );
  const firstPut = events.findIndex(([kind]) => kind === "put");
  assert.ok(secondFetch >= 0 && firstPut >= 0);
  assert.ok(
    secondFetch < firstPut,
    `download of pack 2 must overlap unpack of pack 1 (${secondFetch} < ${firstPut})`,
  );

  // Progress messages for both phases must reach the UI callback.
  assert.ok(shows.some((text) => text.includes("下载资源包 2/3")), shows.join(" | "));
  assert.ok(shows.some((text) => text.includes("解压资源包 1/3") || text.includes("解压资源包 1/")), shows.join(" | "));
  assert.ok(shows.some((text) => text.includes("准备资源包 1/3")), shows.join(" | "));
});

test("engine reads wait for their own pack, not every pack, and cached packs need no download", async () => {
  const first = "assets/resources/native/aa/first.png";
  const second = "assets/resources/native/bb/second.png";
  const built = [buildPack([[first, Buffer.from("first")]]), buildPack([[second, Buffer.from("second")]])];
  const { sandbox, events, stored } = makeSandbox(built);
  sandbox.__COMBAT_PACKS = { packs: built.map(p => p.manifest) };
  const originalFetch = sandbox.fetch;
  let releaseSecond;
  const secondDownload = new Promise(resolve => { releaseSecond = resolve; });
  sandbox.fetch = async url => {
    if (new URL(url).pathname.endsWith(built[1].manifest.file)) await secondDownload;
    return originalFetch(url);
  };
  vm.runInNewContext(fs.readFileSync("offline-resource-packs.js", "utf8"), sandbox);
  const api = sandbox.offlineResourcePacks;
  let allReady = false;
  const running = api.prepare(() => {}).then(() => { allReady = true; });
  await api.whenAvailable("https://game.test/" + first + "?v=1");
  assert.ok(stored.has("https://game.test/" + first));
  assert.equal(allReady, false, "the first pack can be consumed while another is downloading");
  let secondReady = false;
  const gate = api.whenAvailable("https://game.test/" + second).then(() => { secondReady = true; });
  await Promise.resolve();
  assert.equal(secondReady, false);
  releaseSecond();
  await Promise.all([running, gate]);
  const count = events.filter(([kind]) => kind === "fetch-start").length;
  // A fresh page uses the existing cache markers and resolves all file gates.
  vm.runInNewContext(fs.readFileSync("offline-resource-packs.js", "utf8"), sandbox);
  await sandbox.offlineResourcePacks.prepare(() => {});
  await sandbox.offlineResourcePacks.whenAvailable("https://game.test/" + second);
  assert.equal(events.filter(([kind]) => kind === "fetch-start").length, count);
  stored.delete("https://game.test/" + first);
  vm.runInNewContext(fs.readFileSync("offline-resource-packs.js", "utf8"), sandbox);
  await sandbox.offlineResourcePacks.prepare(() => {});
  assert.ok(stored.has("https://game.test/" + first), "a marker alone cannot hide an evicted resource");
  assert.equal(events.filter(([kind]) => kind === "fetch-start").length, count + 1);
});

test("corrupt downloads reject waiting engine reads and can be retried", async () => {
  const file = "assets/resources/native/aa/image.png";
  const pack = buildPack([[file, Buffer.from("image")]]);
  const { sandbox } = makeSandbox([pack]);
  sandbox.__COMBAT_PACKS = { packs: [pack.manifest] };
  const original = pack.bytes[pack.bytes.length - 1];
  pack.bytes[pack.bytes.length - 1] ^= 1;
  vm.runInNewContext(fs.readFileSync("offline-resource-packs.js", "utf8"), sandbox);
  const api = sandbox.offlineResourcePacks;
  const running = api.prepare(() => {});
  await Promise.all([
    assert.rejects(running, /校验失败/),
    assert.rejects(api.whenAvailable("https://game.test/" + file), /校验失败/),
  ]);
  pack.bytes[pack.bytes.length - 1] = original;
  const retry = api.prepare(() => {});
  await Promise.all([retry, api.whenAvailable("https://game.test/" + file)]);
});

test("storage persistence is optional and never blocks resource preparation", async () => {
  for (const mode of ["unsupported", "already", "denied", "granted", "throws", "pending"]) {
    const pack = buildPack([["assets/resources/native/aa/image.png", Buffer.from("image")]]);
    const { sandbox, stored } = makeSandbox([pack]);
    let calls = 0;
    if (mode !== "unsupported") sandbox.navigator.storage = {
      persisted: async () => mode === "already",
      persist: () => {
        calls++;
        if (mode === "throws") throw new Error("Storage unavailable");
        if (mode === "pending") return new Promise(() => {});
        return Promise.resolve(mode === "granted");
      },
    };
    sandbox.__COMBAT_PACKS = { packs: [pack.manifest] };
    vm.runInNewContext(fs.readFileSync("offline-resource-packs.js", "utf8"), sandbox);
    await sandbox.offlineResourcePacks.prepare(() => {});
    await sandbox.offlineResourcePacks.prepare(() => {});
    assert.equal(calls, ["unsupported", "already"].includes(mode) ? 0 : 1, mode);
    assert.equal(stored.size, 2, mode + " must retain the resource and completion marker");
  }
});
