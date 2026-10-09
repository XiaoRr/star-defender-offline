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
