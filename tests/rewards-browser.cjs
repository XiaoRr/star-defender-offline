const assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'C:/Users/41864/AppData/Local/npm-cache/_npx/85e276aa91ec9cfc/node_modules/playwright');
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 try {
  const page=await browser.newPage(),errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  await page.goto(process.env.TEST_GAME_URL||'http://127.0.0.1:18842/');
  const ready=()=>page.waitForFunction(()=>window.cc&&cc.find('Canvas/bg/button')?.activeInHierarchy,null,{timeout:90000});
  await ready();
  const enter=async()=>{
   await page.evaluate(()=>{const p=__require('playerData').default;p.first=0;p.levelPassArray.fill(3,0,6);cc.find('Canvas').getComponent('startScene').startGame();});
   await page.waitForFunction(()=>cc.director.getScene()?.name==='mainScene'&&cc.find('Canvas').getComponent('mainScene')?.pageLayer,null,{timeout:60000});
  };
  await enter();
  const shop=await page.evaluate(async()=>{
   const s=cc.find('Canvas').getComponent('mainScene'),p=__require('playerData').default;
   p.getDataRem();p.freeTimeArray[2]=3;p.saveDataRem();p.saveData();
   const before=p.getItemNum(1);
   await Promise.all([s.page1Button(null,'3-1'),s.page1Button(null,'3-1')]);
   const double={gain:p.getItemNum(1)-before,left:p.freeTimeArray[2]};
   s.openBuyThings(1);
   await Promise.all([s.doBuyThings(),s.page1Button(null,'3-1'),s.doBuyThings()]);
   return {double,total:p.getItemNum(1)-before,left:p.freeTimeArray[2],balance:p.getItemNum(1),
    popup:s.uiLayer.getChildByName('popUI').getChildByName('getItem').active,
    toast:document.getElementById('offline-toast').textContent};
  });
  assert.deepEqual(shop.double,{gain:1000,left:1});assert.equal(shop.total,1500);assert.equal(shop.left,0);assert.equal(shop.popup,false);
  await page.waitForFunction(()=>getComputedStyle(document.getElementById('offline-toast')).display==='none');
  await page.reload();await ready();await enter();
  assert.deepEqual(await page.evaluate(()=>{const p=__require('playerData').default;return {balance:p.getItemNum(1),left:p.freeTimeArray[2]};}),{balance:shop.balance,left:0});
  const sweep=await page.evaluate(async()=>{
   const s=cc.find('Canvas').getComponent('mainScene'),p=__require('playerData').default;
   p.freeTimeArray[5]=1;p.freeTimeArray[6]=1;p.setItemNum(4,144);p.saveDataRem();p.saveData();
   const before=p.getItemNum(1);await Promise.all([s.autoGame(),s.autoGame()]);
   return {gain:p.getItemNum(1)-before,energy:p.getItemNum(4),visible:getComputedStyle(document.getElementById('sweep-reward')).display,slots:[p.freeTimeArray[5],p.freeTimeArray[6]]};
  });
  assert.equal(sweep.energy,132);assert.ok(sweep.gain>0);assert.deepEqual(sweep.slots,[0,0]);assert.equal(sweep.visible,'block');
  await page.waitForFunction(()=>getComputedStyle(document.getElementById('sweep-reward')).display==='none',null,{timeout:5000});
  const arena=[];
  for(const code of [1,0]) {
   const result=await page.evaluate(async code=>{
    const p=__require('playerData').default,api=offlineArena.provider;p.addItem(9,10);
    api.begin(p);const before=p.getItemNum(8);await api.settle(p,code);
    const toast=document.getElementById('offline-toast').textContent;
    await api.settle(p,code);
    return {gain:p.getItemNum(8)-before,toast};
   },code);
   assert.equal(result.gain,code===1?2:1);assert.match(result.toast,new RegExp('科技星核 \\+'+(code===1?2:1)));
   await page.waitForFunction(()=>getComputedStyle(document.getElementById('offline-toast')).display==='none',null,{timeout:5000});
   arena.push(result);
  }
  assert.deepEqual(errors,[]);console.log(JSON.stringify({shop,sweep,arena,errors},null,2));
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
