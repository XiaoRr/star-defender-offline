const fs = require('node:fs');
const zlib = require('node:zlib');
const crypto = require('node:crypto');
const plan = JSON.parse(fs.readFileSync('config/combat-pack-groups.json'));
const hash = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const configHash = crypto.createHash('sha256');
for (const file of plan.configFiles) configHash.update(JSON.stringify(JSON.parse(fs.readFileSync(file))));
if (configHash.digest('hex') !== plan.sourceHash) throw new Error('Recollect Cocos dependencies before rebuilding packs');
const owners = new Map();
for (const group of plan.groups) for (const file of group.files) {
  if (!/^assets\/(resources|internal)\/(import|native)\//.test(file) || file.includes('..')) throw new Error('Invalid dependency: '+file);
  if (!owners.has(file)) owners.set(file,new Set());
  owners.get(file).add(group.name);
}
const shared = [...owners].filter(([,groups])=>groups.size>1).map(([file])=>file).sort();
const bins = [{name:'shared',files:shared}, ...plan.groups.map(group=>({name:group.name,
  files:group.files.filter(file=>owners.get(file).size===1)}))];
const manifest = {version:2,files:owners.size,packs:[],groups:[]};
fs.mkdirSync('packs',{recursive:true});
for(const bin of bins) {
  if(!bin.files.length) continue;
  const bodies=bin.files.map(file=>{
    const bytes=fs.readFileSync(file);
    return file.endsWith('.json')?Buffer.from(bytes.toString('utf8').replace(/\r\n/g,'\n')):bytes;
  });
  let offset=0;
  const entries=bin.files.map((file,index)=>{const entry=[file,offset,bodies[index].length];offset+=bodies[index].length;return entry;});
  const header=Buffer.from(JSON.stringify(entries)), length=Buffer.alloc(4);
  length.writeUInt32LE(header.length);
  const compressed=zlib.gzipSync(Buffer.concat([length,header,...bodies]),{level:9});
  if(compressed.length>25*1024*1024)throw new Error('Pack exceeds hosting limit: '+bin.name);
  const sha256=hash(compressed),file=`packs/combat-${bin.name}-${sha256.slice(0,16)}.bin.gz`;
  fs.writeFileSync(file,compressed);
  manifest.packs.push({group:bin.name,file,sha256,bytes:compressed.length,files:entries.length,paths:bin.files});
}
for(const group of plan.groups)manifest.groups.push({name:group.name,assets:group.assets,
  requires:manifest.packs.filter(pack=>pack.paths.some(file=>owners.get(file).has(group.name))).map(pack=>pack.sha256)});
fs.writeFileSync('combat-packs.js','window.__COMBAT_PACKS='+JSON.stringify(manifest)+';\n');
console.log(JSON.stringify(manifest.packs.map(p=>({group:p.group,files:p.files,bytes:p.bytes}))));
