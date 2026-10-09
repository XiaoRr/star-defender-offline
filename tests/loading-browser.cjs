const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'C:/Users/41864/AppData/Local/npm-cache/_npx/85e276aa91ec9cfc/node_modules/playwright');
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 const report={errors:[],fallbacks:[],events:[]};
 try {
  const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true});
  const page=await context.newPage();
  const gameUrl=process.env.TEST_GAME_URL||'http://127.0.0.1:18842/';
  const basePath=new URL(gameUrl).pathname;
  const manifestContext={window:{}};vm.runInNewContext(fs.readFileSync('combat-packs.js','utf8'),manifestContext);
  const manifest=manifestContext.window.__COMBAT_PACKS,files=new Set(manifest.packs.flatMap(p=>p.paths));
  let archives=0;
  page.on('pageerror',e=>report.errors.push(e.message));
  page.on('response',r=>{if(new URL(r.url()).pathname.endsWith('.bin.gz'))archives++;});
  context.on('request',r=>{if(r.serviceWorker()&&files.has(new URL(r.url()).pathname.slice(basePath.length)))report.fallbacks.push(r.url());});
  await page.addInitScript(()=>{
   window.__groupEvents=[];let api;
   Object.defineProperty(window,'offlineBattleLoad',{configurable:true,get:()=>api,set:value=>{
    api=value;const startup=api.startup;
    api.startup=function(...args){
     const load=cc.resources.loadDir.bind(cc.resources);
     cc.resources.loadDir=function(...a){const path=a[0],done=a[a.length-1];
      __groupEvents.push({path,event:'start',at:performance.now()});
      a[a.length-1]=function(...r){__groupEvents.push({path,event:'done',at:performance.now()});done(...r);};
      return load(...a);
     };return startup(...args);
    };
   }});
  });
  const ready=()=>page.waitForFunction(()=>window.cc&&cc.find('Canvas/bg/button')?.activeInHierarchy,null,{timeout:90000});
  await page.goto(gameUrl);await ready();
  report.cold=await page.evaluate(()=>({retained:offlineBattleLoad.retainedCount,timings:offlineBattleLoad.timings,events:__groupEvents}));
  assert.equal(archives,manifest.packs.length);assert.equal(report.cold.retained,91);assert.deepEqual(report.fallbacks,[]);
  assert.ok(report.cold.events.some(e=>e.event==='start'&&e.at<report.cold.timings.packsReady),'engine work must start before all downloads finish');
  await page.evaluate(()=>{const p=__require('playerData').default;p.first=0;p.levelPassArray[0]=3;offlineFortress.state().level=1;p.saveData();});
  archives=0;await page.reload();await ready();
  assert.equal(archives,0);assert.equal(await page.evaluate(()=>offlineFortress.state().level),1);
  report.warm=await page.evaluate(()=>offlineBattleLoad.timings);
  await page.evaluate(()=>cc.find('Canvas').getComponent('startScene').startGame());
  await page.waitForFunction(()=>cc.director.getScene()?.name==='mainScene',null,{timeout:30000});
  // Scene scripts and audio aren't in the combat packs; isolate the promised
  // graphics/prefab barrier rather than claiming a fully offline website.
  await page.evaluate(()=>new Promise((resolve,reject)=>cc.director.preloadScene('gameScene',e=>e?reject(e):resolve())));
  await context.setOffline(true);
  await page.evaluate(()=>{const p=__require('playerData').default,g=__require('gameData').default;
   p.music=false;p.sound=false;g.nowGameLevel=2;__require('gameScene').default.isContinue=false;cc.director.loadScene('gameScene');});
  await page.waitForFunction(()=>__require('gameData').default.gameInstance?.buildingArray?.length>0,null,{timeout:30000});
  report.battle=await page.evaluate(async()=>{const s=__require('gameData').default.gameInstance;s.unscheduleAllCallbacks();s.isPause=true;
   if(!s.buildingArray.some(n=>n.getComponent('building').type===2)){s.buildingChoice.choiceArray.push(1);await s.productBuilding(2);}
   await s.addArmy(2,1,cc.v2(0,0));
   return {base:s.buildingArray.some(n=>n.getComponent('building').type===1),barracks:s.buildingArray.some(n=>n.getComponent('building').type===2),army:s.armyArray.length};});
  assert.ok(report.battle.base&&report.battle.barracks&&report.battle.army>0);
  assert.deepEqual(report.errors,[]);assert.deepEqual(report.fallbacks,[]);
  if(process.env.LOADING_SCREENSHOT)await page.screenshot({path:process.env.LOADING_SCREENSHOT});
 }finally{await browser.close();}
 console.log(JSON.stringify(report,null,2));
 if(process.env.LOADING_REPORT)fs.writeFileSync(process.env.LOADING_REPORT,JSON.stringify(report,null,2));
})().catch(error=>{console.error(error);process.exitCode=1;});
