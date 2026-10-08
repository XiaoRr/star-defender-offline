const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
function setup() {
  const player={b_misc:{},buildingLevelArray:[0],dailyArray:[0,0,0,0],saveData(){}};
  const data={gameMode:0,dailyNeed:[5,800,800,3]};
  const storage=new Map();
  const context={window:{},__require(name){return name==='building'?{BuildingConfig:[{hp:700,attack:20,range:350,cdTime:1}]}:{default:name==='playerData'?player:data};},localStorage:{getItem:k=>storage.get(k),setItem:(k,v)=>storage.set(k,v)}};
  vm.createContext(context);
  for(const file of ['offline-fortress.js','offline-daily.js'])vm.runInContext(fs.readFileSync(file,'utf8'),context);
  return {player,data,fortress:context.window.offlineFortress,daily:context.window.offlineDaily};
}
test('five independent draws, probability boundary, and no shards at maximum level',()=>{
  const {fortress}=setup(); let calls=0;
  assert.equal(fortress.roll(5,()=>{calls++;return 0.1999}),10);
  assert.equal(calls,5);
  assert.equal(fortress.roll(5,()=>0.2),0);
  fortress.state().level=10;
  assert.equal(fortress.roll(5,()=>{throw Error('Must not roll at maximum level')}),0);
  assert.equal(fortress.state().shards,10);
});
test('fortress follows base upgrades at 2x initially and 3x at max in both modes',()=>{
  const {fortress,player}=setup();
  for(const mode of [0,1])for(const baseLevel of [0,2,10])for(const level of [1,10]) {
    player.buildingLevelArray[0]=baseLevel;
    const stats=fortress.stats(level,mode),growth=Math.pow(mode===1?1.075:1.15,baseLevel),multiplier=level===1?2:3;
    assert.equal(stats.hp,700*1.6*growth*multiplier);
    assert.equal(stats.attack,20*growth*multiplier);
    assert.equal(stats.range,350);
  }
});
test('daily is ready without ads, claimed once across reload/stale import, resets next day',()=>{
  const {daily,player,data}=setup(); daily.day=()=> '2026-10-8';
  daily.sync(player,data); assert.equal(player.dailyArray[3],3);
  assert.equal(daily.claim(player,data),true);
  assert.equal(daily.claim(player,data),false);
  player.b_misc=JSON.parse(JSON.stringify(player.b_misc));
  assert.equal(daily.claim(player,data),false);
  player.b_misc={}; assert.equal(daily.claim(player,data),false);
  daily.day=()=> '2026-10-9'; assert.equal(daily.claim(player,data),true);
});
