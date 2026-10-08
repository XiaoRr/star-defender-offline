const assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE || 'C:/Users/41864/AppData/Local/npm-cache/_npx/85e276aa91ec9cfc/node_modules/playwright');
(async()=>{
  const browser=await chromium.launch({channel:'msedge',headless:true});
  const page=await browser.newPage();
  try {
    await page.goto(process.env.TEST_GAME_URL || 'http://127.0.0.1:18776/');
    await page.waitForFunction(()=>window.cc&&cc.find('Canvas/bg/button')?.activeInHierarchy,null,{timeout:90000});
    const enter=async()=>{
      await page.evaluate(()=>{const p=__require('playerData').default;p.first=0;p.levelPassArray[0]=3;cc.find('Canvas').getComponent('startScene').startGame()});
      await page.waitForFunction(()=>cc.director.getScene()?.name==='mainScene',null,{timeout:180000});
      await page.waitForFunction(()=>cc.find('Canvas').getComponent('mainScene').pageLayer.getChildByName('page4').getChildByName('scrollView').getChildByName('view').getChildByName('content').getChildByName('fortressEntry'));
    };
    await enter();
    const draws=await page.evaluate(async()=>{
      const scene=cc.find('Canvas').getComponent('mainScene'),p=__require('playerData').default,f=offlineFortress;
      p.addItem(2,10000);p.saveData();
      f.state().level=1;f.state().shards=0;
      const original=f.roll,counts=[];
      f.roll=count=>{counts.push(count);return original(count,()=>0)};
      for(const button of ['1-2','2-2']) {
        await scene.page1Button(null,button);
        await new Promise(resolve=>setTimeout(resolve,800));
        scene.closeGetItem();
      }
      f.roll=original;
      const shards=f.state().shards;
      f.state().level=10;const capped=f.roll(5,()=>0);
      p.buildingLevelArray[0]=0;
      const first=f.stats(1,0),max=f.stats(10,0);
      return {counts,shards,capped,firstAttack:first.attack,maxAttack:max.attack,energy:__require('gameData').default.HPLimit};
    });
    assert.deepEqual(draws,{counts:[1,5],shards:12,capped:0,firstAttack:40,maxAttack:60,energy:144});
    const daily=await page.evaluate(async()=>{
      const scene=cc.find('Canvas').getComponent('mainScene'),p=__require('playerData').default,g=__require('gameData').default;
      const wait=()=>new Promise(resolve=>setTimeout(resolve,800));
      p.dailyArray=[0,0,0,0];scene.openDaily();const ready=g.hasDaily();
      const before=p.getItemNum(2);scene.finishDaily(null,'4');scene.finishDaily(null,'4');await wait();
      const first=p.getItemNum(2)-before;
      await Promise.all([scene.doubleGetItem(),scene.doubleGetItem(),scene.doubleGetItem()]);await wait();
      const doubled=p.getItemNum(2)-before;
      scene.closeGetItem();scene.finishDaily(null,'4');await wait();
      return {ready,first,doubled,afterDuplicate:p.getItemNum(2)-before,claimed:offlineDaily.claimed(p)};
    });
    assert.deepEqual(daily,{ready:true,first:30,doubled:60,afterDuplicate:60,claimed:true});
    await page.reload();
    await page.waitForFunction(()=>window.cc&&cc.find('Canvas/bg/button')?.activeInHierarchy,null,{timeout:90000});
    await enter();
    assert.equal(await page.evaluate(()=>offlineDaily.claimed(__require('playerData').default)),true);
    console.log(JSON.stringify({draws,daily,persistedAfterReload:true}));
  } finally {await browser.close()}
})().catch(error=>{console.error(error);process.exitCode=1});
