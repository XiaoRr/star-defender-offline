// Generate the download gate from the archives themselves, never from guessed categories.
const fs = require('node:fs');
const vm = require('node:vm');
const zlib = require('node:zlib');
const crypto = require('node:crypto');

function indexPacks() {
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync('combat-packs.js', 'utf8'), context);
  const manifest = context.window.__COMBAT_PACKS;
  const seen = new Set();
  for (const pack of manifest.packs) {
    const compressed = fs.readFileSync(pack.file);
    if (compressed.length !== pack.bytes || crypto.createHash('sha256').update(compressed).digest('hex') !== pack.sha256)
      throw new Error('Archive checksum mismatch: ' + pack.file);
    const bytes = zlib.gunzipSync(compressed);
    const headerLength = bytes.readUInt32LE(0);
    const entries = JSON.parse(bytes.subarray(4, 4 + headerLength));
    if (entries.length !== pack.files) throw new Error('Archive count mismatch: ' + pack.file);
    pack.paths = entries.map(([file, offset, length]) => {
      if (!/^assets\/(resources|internal)\/(import|native)\//.test(file) || file.includes('..') || seen.has(file) ||
          offset < 0 || length < 0 || 4 + headerLength + offset + length > bytes.length)
        throw new Error('Invalid archive entry: ' + file);
      const original = fs.readFileSync(file);
      const archived = bytes.subarray(4 + headerLength + offset, 4 + headerLength + offset + length);
      // Windows checkouts may use CRLF for JSON without changing the asset.
      if (!original.equals(archived) && !(file.endsWith('.json') &&
          JSON.stringify(JSON.parse(original)) === JSON.stringify(JSON.parse(archived))))
        throw new Error('Archive is stale: ' + file);
      seen.add(file);
      return file;
    });
  }
  if (seen.size !== manifest.files) throw new Error('Manifest file count mismatch');
  if (manifest.version === 2) {
    const plan = JSON.parse(fs.readFileSync('config/combat-pack-groups.json'));
    const configHash = crypto.createHash('sha256');
    for (const file of plan.configFiles) configHash.update(JSON.stringify(JSON.parse(fs.readFileSync(file))));
    if (configHash.digest('hex') !== plan.sourceHash) throw new Error('Cocos config changed: recollect dependencies');
    if (manifest.groups.length !== plan.groups.length) throw new Error('Missing combat group');
    for (const group of plan.groups) {
      const schedule = manifest.groups.find(item => item.name === group.name);
      if (!schedule || schedule.assets !== group.assets) throw new Error('Stale group: ' + group.name);
      const covered = new Set();
      for (const hash of schedule.requires) {
        const pack = manifest.packs.find(pack => pack.sha256 === hash);
        if (!pack) throw new Error('Missing group pack: ' + group.name);
        pack.paths.forEach(file => covered.add(file));
      }
      if (group.files.some(file => !covered.has(file))) throw new Error('Incomplete group dependencies: ' + group.name);
    }
  }
  return 'window.__COMBAT_PACKS=' + JSON.stringify(manifest) + ';\n';
}

if (require.main === module) {
  const output = indexPacks();
  if (process.argv.includes('--check')) {
    if (fs.readFileSync('combat-packs.js', 'utf8').replace(/\r\n/g,'\n') !== output) throw new Error('Run node scripts/index-combat-packs.cjs');
  } else fs.writeFileSync('combat-packs.js', output);
}
module.exports = indexPacks;
