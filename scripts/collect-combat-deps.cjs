// Run against a local game server after changing Cocos resources. Uses the real
// engine dependency graph, including shared atlases and packed import metadata.
const fs = require('node:fs');
const crypto = require('node:crypto');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'C:/Users/41864/AppData/Local/npm-cache/_npx/85e276aa91ec9cfc/node_modules/playwright');
(async () => {
  const browser = await chromium.launch({channel:'msedge',headless:true});
  try {
    const page = await browser.newPage();
    await page.goto(process.env.TEST_GAME_URL || 'http://127.0.0.1:18842/');
    await page.waitForFunction(() => window.cc && cc.find('Canvas/bg/button')?.activeInHierarchy,null,{timeout:120000});
    const groups = await page.evaluate(async () => {
      const result = [];
      for (const name of ['building','army','bullet','enemy','effect','ui','bg']) {
        const roots = await new Promise((resolve,reject) => cc.resources.loadDir('starcraft/'+name,
          name==='bg'?cc.SpriteFrame:cc.Prefab,(error,assets)=>error?reject(error):resolve(assets)));
        const uuids = new Set(roots.flatMap(asset => [asset._uuid,...cc.assetManager.dependUtil.getDepsRecursively(asset._uuid)]));
        const files = new Set();
        for (const uuid of uuids) {
          const bundle = cc.assetManager.bundles.find(b => {const info=b.getAssetInfo(uuid);return info&&!info.redirect;});
          if (!bundle) continue; // Built-in engine objects have no external file.
          const info = bundle.getAssetInfo(uuid);
          // A UUID can appear in several import packs. Include every candidate so
          // engine pack selection cannot introduce a hidden network dependency.
          for (const source of info.packs || [{uuid,ext:'.json'}])
            files.add(cc.assetManager._transform(source.uuid,{bundle:bundle.name,ext:source.ext||'.json'}));
          const asset = cc.assetManager.assets.get(uuid);
          if (asset?._native && asset.nativeUrl) files.add(asset.nativeUrl);
        }
        const paths = [...files].map(url=>decodeURIComponent(new URL(url,location.href).pathname).replace(/^\//,''));
        result.push({name,files:paths.sort(),assets:roots.length});
      }
      return result;
    });
    for(const group of groups)for(const file of group.files) {
      if(!/^assets\/(resources|internal)\/(import|native)\//.test(file)||file.includes('..')||!fs.existsSync(file))
        throw new Error('Unresolved dependency: '+file);
    }
    const configFiles=['assets/resources/config.9fdbc.json','assets/internal/config.d0832.json'];
    const sourceHash=crypto.createHash('sha256');
    for(const file of configFiles)sourceHash.update(JSON.stringify(JSON.parse(fs.readFileSync(file))));
    const output={version:1,configFiles,sourceHash:sourceHash.digest('hex'),groups};
    fs.writeFileSync('config/combat-pack-groups.json',JSON.stringify(output,null,2)+'\n');
    console.log(JSON.stringify(groups.map(g=>({name:g.name,files:g.files.length,assets:g.assets}))));
  } finally {await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
