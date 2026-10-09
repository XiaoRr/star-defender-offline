const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const entry=fs.readFileSync('index.html','utf8');
const settings=entry.match(/src="(src\/settings\.[^"?]+\.js)/)[1];
const version=fs.readFileSync(settings,'utf8').match(/main: "([^"]+)"/)[1];
const runtime=fs.readFileSync(`assets/main/index.${version}.js`,'utf8');
function method(name){
 const start=runtime.indexOf(`(t.prototype.${name} = function`);
 assert.ok(start>=0,name);
 const body=runtime.indexOf('function',start),end=runtime.indexOf('\n              }),',body);
 return '('+runtime.slice(body,end)+'\n})';
}
test('free resources commit each click synchronously and share quota between entry points',async()=>{
 const player={freeTimeArray:[0,0,3,3,5],items:{1:0,2:0,4:0},getDataRem(){},saveDataRem(){},
  saveData(){this.saved=JSON.stringify({items:this.items,quota:this.freeTimeArray});},addItem(id,n){this.items[id]+=n;}};
 const context={p:{default:player},y:{default:{inst:{playAudio(){}}}},window:{offlineToast(){}},cc:{Label:'label'},Promise};
 const scene={popTips(){},refreshPage1(){},uiLayer:{getChildByName(){return this;},getComponent(){return {};}}};
 for(const name of ['claimFreeResource','page1Button','doBuyThings'])scene[name]=vm.runInNewContext(method(name),context);
 for(const [type,button,slot,amount,limit] of [[1,'3-1',2,500,3],[2,'3-2',3,50,3],[4,'3-3',4,50,5]]){
  scene.buyThingsType=type;
  const calls=[];
  for(let i=0;i<limit+3;i++)calls.push(i%2?scene.doBuyThings():scene.page1Button(null,button));
  assert.equal(player.items[type],amount*limit,'rewards arrive before any async continuation');
  assert.equal(player.freeTimeArray[slot],0,'quota never drops below zero');
  await Promise.all(calls);
  assert.equal(JSON.parse(player.saved).items[type],amount*limit);
 }
});
