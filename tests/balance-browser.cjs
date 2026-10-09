const assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE || 'C:/Users/41864/AppData/Local/npm-cache/_npx/85e276aa91ec9cfc/node_modules/playwright');
(async()=>{
  const browser=await chromium.launch({channel:'msedge',headless:true});
  const page=await browser.newPage();
  try {
    await page.goto(process.env.TEST_GAME_URL || 'http://127.0.0.1:18776/');
    await page.waitForFunction(()=>window.cc&&cc.find('Canvas/bg/button')?.activeInHierarchy,null,{timeout:90000});
    const enter=async()=>{
      await page.evaluate(()=>{const p=__require('playerData').default;p.first=0;p.levelPassArray.fill(3,0,6);cc.find('Canvas').getComponent('startScene').startGame()});
      await page.waitForFunction(()=>cc.director.getScene()?.name==='mainScene',null,{timeout:180000});
      await page.waitForFunction(()=>cc.find('Canvas').getComponent('mainScene').pageLayer.getChildByName('page4').getChildByName('scrollView').getChildByName('view').getChildByName('content').getChildByName('fortressEntry'));
    };
    await enter();
    await page.evaluate(()=>{const s=cc.find('Canvas').getComponent('mainScene');s.showPage(2);s.pageLayer.getChildByName('page2').getChildByName('tabs').getChildByName('tab2').emit('click')});
    await page.waitForFunction(()=>cc.find('Canvas').getComponent('mainScene')._new_tech_node?.activeInHierarchy,null,{timeout:60000});
    const sweep=await page.evaluate(async()=>{
      const s=cc.find('Canvas').getComponent('mainScene'),p=__require('playerData').default;
      s.changePageIndex(3);p.freeTimeArray[5]=1;p.freeTimeArray[6]=1;p.setItemNum(4,144);p.saveDataRem();p.saveData();
      const before=p.getItemNum(1),used=p.dailyArray[0];
      await Promise.all([s.autoGame(),s.autoGame()]);
      return {energy:p.getItemNum(4),gold:p.getItemNum(1)-before,runs:p.dailyArray[0]-used,slots:[p.freeTimeArray[5],p.freeTimeArray[6]],pop:s.uiLayer.getChildByName('popUI').getChildByName('getItem').active,toasts:document.querySelectorAll('#sweep-reward').length,blocking:document.getElementById('sweep-reward').style.pointerEvents};
    });
    assert.deepEqual(sweep,{energy:132,gold:310,runs:2,slots:[0,0],pop:false,toasts:1,blocking:'none'});
    await page.waitForFunction(()=>getComputedStyle(document.getElementById('sweep-reward')).display==='none');
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
    console.log(JSON.stringify({strategyTechOpened:true,sweep,draws,daily,persistedAfterReload:true}));
  } finally {await browser.close()}
})().catch(error=>{console.error(error);process.exitCode=1});
