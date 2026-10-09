const {test}=require('node:test'),assert=require('node:assert/strict'),vm=require('node:vm'),fs=require('node:fs');
test('arena cores are items, not rank score, and cannot repeat after bonus or reload',async()=>{
 const window={};vm.runInNewContext(fs.readFileSync('offline-arena.js','utf8'),{window});
 let saved;const p={jx:18,arenaScore:1000,b_misc:{},items:{8:0,9:20},getItemNum(id){return this.items[id]||0},addItem(id,n){this.items[id]=(this.items[id]||0)+n},subItem(id,n){this.items[id]-=n},saveDataRem(){},saveData(){saved=JSON.stringify({b_misc:this.b_misc,items:this.items})}};
 const api=window.offlineArena.provider;assert.equal((await api.settle(p,1)).err,1);
 api.begin(p);await api.settle(p,1);assert.equal(p.items[8],2);
 await Promise.all([api.settle(p,1),api.settle(p,2),api.settle(p,0)]);assert.equal(p.items[8],2);
 Object.assign(p,JSON.parse(saved));await api.settle(p,1);assert.equal(p.items[8],2);
 api.begin(p);await api.settle(p,0);await api.settle(p,3);assert.equal(p.items[8],3);
 api.begin(p);await api.settle(p,4);assert.equal(p.items[8],3);
 p.jx=1;p.arenaScore=0;api.begin(p);const result=await api.settle(p,1);assert.equal(result.gain,10);assert.equal(p.items[8],5);
});
test('rapid sweeps grant each reward, share one nonblocking notification and respect limits',()=>{
 const nodes=[],timers=new Map();let timerId=0,saved,level=1;
 const p={items:{4:30},freeTimeArray:[0,0,0,0,0,1,1],dailyArray:[0],getDataRem(){},getItemNum(id){return this.items[id]||0},addItem(id,n){this.items[id]=(this.items[id]||0)+n},subItem(id,n){this.items[id]-=n},saveDataRem(){},saveData(){saved=JSON.stringify(this.items)}};
 const modules={playerData:p,stageData:{GetStar3Level:()=>level,GetLevelReward:()=>[[5,25],[6,2],[1,150],[7,1]]},gameData:{getArmyTypeFlag:()=>1,getBuildingTypeFlag:()=>1},itemData:{getItemNameWithType:id=>'item'+id},audioMgr:{inst:{playAudio(){}}}};
 const context={window:{},document:{createElement:()=>({style:{},setAttribute(){}}),body:{appendChild:n=>nodes.push(n)}},setTimeout:f=>{timers.set(++timerId,f);return timerId},clearTimeout:id=>timers.delete(id),__require:n=>({default:modules[n]})};
 vm.runInNewContext(fs.readFileSync('offline-sweep.js','utf8'),context);
 const scene={popTips(){},refreshAll(){}};const run=()=>context.window.offlineSweep.run(scene);
 assert.equal(run(),true);assert.equal(run(),true);assert.equal(run(),false);
 assert.deepEqual(p.items,{4:18,201:50,101:4,1:300,7:2});assert.equal(p.dailyArray[0],2);assert.deepEqual(JSON.parse(saved),p.items);
 assert.equal(nodes.length,1);assert.match(nodes[0].style.cssText,/pointer-events:none/);assert.equal(timers.size,1);for(const f of timers.values())f();assert.equal(nodes[0].style.display,'none');
 p.freeTimeArray[5]=2;p.items[4]=5;assert.equal(run(),false);assert.equal(p.freeTimeArray[5],2);p.items[4]=30;level=0;assert.equal(run(),false);
});
test('released entry retains all required hooks and independent three-use counters',()=>{
 const html=fs.readFileSync('index.html','utf8'),settings=html.match(/src="(src\/settings\.[^"?]+\.js)/)[1];
 const version=fs.readFileSync(settings,'utf8').match(/main: "([^"]+)"/)[1],runtime=fs.readFileSync(`assets/main/index.${version}.js`,'utf8');
 for(const hook of ['offlineBattleRules.reroll','offlineBattleRules.rarityMix','offlineAllChoice.refresh','offlineDaily.sync','offlineSweep.run','offlineBattleLoad.startup','offlineBuildingSale.prepareBuilding'])assert.ok(runtime.includes(hook),hook);
 assert.match(runtime,/refreshUsed:this\._refreshUsed/);assert.match(runtime,/allChoiceUsed:this\._allChoiceUsed/);
 assert.doesNotMatch(runtime,/"1"\s*!=\s*m\.wechat\.getHttpParam\("tech"\)/);
 assert.match(runtime,/HPLimit = 144/);
 for(const file of ['offline-arena','offline-daily','offline-fortress','offline-redeem','offline-building-sale','offline-battle-rules','offline-all-choice','offline-resource-packs','offline-battle-load','offline-sweep'])assert.ok(html.includes(file+'.js'),file);
});
