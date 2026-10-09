const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const indexPacks = require('../scripts/index-combat-packs.cjs');
const deferred = () => { let resolve, reject; const promise = new Promise((a,b) => { resolve=a; reject=b; }); return {promise,resolve,reject}; };

test('archive index matches real files and committed hashes', () => {
  assert.equal(indexPacks(), fs.readFileSync('combat-packs.js', 'utf8').replace(/\r\n/g,'\n'));
});

test('asset creation overlaps download but entry waits for every group and restores downloader', async () => {
  const groups = ['building','army','bullet','enemy','effect','ui','bg'];
  const gates = Object.fromEntries(groups.map(g => [g,deferred()]));
  const packs = deferred(), created = [], held = [];
  const original = function(id, url, type, options, done) {
    created.push(id);
    done(null, [{addRef(){held.push(id);}}]);
  };
  const downloader = {download:original,maxConcurrency:2,maxRequestsPerFrame:2};
  const context = {console,performance,Promise,cc:{
    Prefab:'prefab',SpriteFrame:'frame',assetManager:{downloader},
    resources:{
      loadDir(path,type,progress,done) {
        const group=path.split('/').pop();
        downloader.download(group,group,'asset',{},done);
      },
      get(){return {};},
    },
  },offlineFortress:{state:()=>({level:0})},offlineResourcePacks:{
    prepare:()=>packs.promise,whenAvailable:url=>gates[url].promise,
    whenGroupAvailable:name=>gates[name].promise,
  }};
  context.window=context;
  vm.runInNewContext(fs.readFileSync('offline-battle-load.js','utf8'), context);
  const api=context.offlineBattleLoad;
  const work=api.prepare();
  assert.equal(api.ready,false);
  assert.deepEqual(created,[]);
  gates.building.resolve();
  await new Promise(setImmediate);
  assert.deepEqual(created,['building']);
  let entered=0;
  api.enter(()=>entered++);
  assert.equal(entered,0);
  for(const group of groups.slice(1))gates[group].resolve();
  await new Promise(setImmediate);
  assert.equal(held.length,7);
  assert.equal(api.ready,false,'even completed engine work must await archive verification');
  packs.resolve(); await work;
  assert.equal(api.ready,true);
  assert.equal(downloader.download,original);
  assert.equal(downloader.maxConcurrency,2);
  assert.equal(downloader.maxRequestsPerFrame,2);
  assert.equal(api.retainedCount,7);
  api.enter(()=>entered++);assert.equal(entered,1);
});
