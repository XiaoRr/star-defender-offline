const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');

function fixture() {
  const data = {gameMode:0, nowLevel:99, getLevelGiftValueWithType:()=>0};
  const armyNames = ['NONG_MING','JI_QIANG_BING','PENG_HUO_BING','HU_DUN_BING','BING_LEI_CHE','TAN_KE','JI_QI_REN','ZHAN_JI','KE_JI_QIU','DA_HE_JIAN'];
  const modules = {
    gameData:{default:data}, playerData:{default:{dailyArray:[0,0,0]}},
    starArmy:{ArmyType:Object.fromEntries(armyNames.map((key,index)=>[key,index+1]))},
    audioMgr:{default:{inst:{playAudio(){}}}},
    libcocos:{cocos:{loadRes:()=>Promise.resolve({})}}, libwechat:{wechat:{}}
  };
  function Node(name) {
    this.name=name; this.children=[]; this.handlers={}; this.components=new Map();
    this.active=true; this.x=0; this.y=0;
    this.stopAllActions=()=>{}; this.removeFromParent=()=>{};
    this.destroy=()=>{this.destroyed=true;};
    this.setPosition=(x,y)=>{this.x=x;this.y=y;};
    this.on=(event,handler)=>{this.handlers[event]=handler;};
    this.getChildByName=name=>this.children.find(child=>child.name===name)||null;
    this.addChild=child=>{this.children.push(child);child.parent=this;};
    this.setContentSize=()=>{};
    this.addComponent=type=>{const component=new type();this.components.set(type,component);return component;};
    this.getComponent=type=>this.components.get(type);
    this.getBoundingBoxToWorld=()=>({contains:point=>point.x>=0&&point.x<=100&&point.y>=0&&point.y<=100});
  }
  Node.EventType={TOUCH_START:'touchstart',TOUCH_END:'touchend',TOUCH_CANCEL:'touchcancel'};
  function Graphics() {for(const name of ['moveTo','lineTo','close','fill','stroke','rect'])this[name]=()=>{};}
  function Label() {} Label.HorizontalAlign={CENTER:0};Label.VerticalAlign={CENTER:0};Label.Overflow={SHRINK:0};
  function Button() {} Button.Transition={SCALE:0};
  function Sprite() {} Sprite.SizeMode={CUSTOM:0};
  function Color() {} Color.fromHEX=()=>({});
  const cc = {
    Component:function(){}, Node, _RF:{push(){},pop(){}},
    _decorator:{ccclass:type=>type,property:()=>()=>{}},
    isValid:node=>!!node&&!node.destroyed,
    instantiate:()=>new Node()
  };
  Object.assign(cc,{Graphics,Label,Button,Sprite,Color,BlockInputEvents:function(){},color:()=>({}),view:{getVisibleSize:()=>({width:640,height:960})}});
  const context=vm.createContext({window:{},cc,console,Math});
  context.__require=name=>modules[name]||{default:{}};
  function load(name) {
    const exports={};
    context.module={exports:{}};
    context.testExports=exports;
    context.testRequire=request=>context.__require(request.split('/').pop());
    vm.runInContext('{'+fs.readFileSync(path.join(root,'deobfuscated/modules',name+'.js'),'utf8')+'; __mod(testRequire, {exports:testExports}, testExports);}',context);
    modules[name]=exports;
    return exports.default;
  }
  const Building=load('building');
  const Choice=load('buildingChoice');
  const Scene=load('gameScene');
  const PvpScene=load('pvpScene');
  vm.runInContext(fs.readFileSync(path.join(root,'offline-building-sale.js'),'utf8'),context);
  const sale=context.window.offlineBuildingSale;
  const scene={isBattle:true,isPause:false,money:40,buildingArray:[],armyArray:[],
    node:new Node(),buildingImgArray:[],buildingChoice:new Choice(),setPause(){},hasBuildingChoice:true};
  data.gameInstance=scene;
  const building=new Building();
  Object.assign(building,{type:2,hp:200,pvpWay:0,isOver:false,node:new Node(),
    productArray:[{type:2,limit:4,cdNow:1,cdTime:1}],unscheduleAllCallbacks(){this.cancelled=true;}});
  building.node.getComponent=()=>building;
  scene.buildingArray.push(building.node);
  scene.buildingChoice.choiceArray=[1,6,15];
  return {sale,scene,building,data,modules,Building,Choice,Scene,PvpScene,cc,Node};
}

test('refund is exactly 100, idempotent, retains upgrades and already produced units',()=>{
  const {sale,scene,building}=fixture();
  scene.armyArray.push({existing:true});
  assert.equal(sale.sell(scene,building),true);
  assert.equal(scene.money,140);
  assert.equal(sale.sell(scene,building),false);
  assert.equal(scene.money,140);
  assert.deepEqual(scene.buildingChoice.choiceArray,[6,15]);
  assert.equal(scene.armyArray.length,1);
  assert.equal(scene.buildingArray.length,0);
  assert.equal(building.productArray.length,0);
  assert.equal(building.cancelled,true);
  assert.equal(building.node.destroyed,true);
  assert.equal(scene.hasBuildingChoice,false);
});
test('base, fortress, enemy, dead and non-battle buildings are excluded',()=>{
  for (const change of [{type:1},{_fortress:true},{pvpWay:1},{hp:0},{isOver:true}]) {
    const {sale,scene,building}=fixture(); Object.assign(building,change);
    assert.equal(sale.sell(scene,building),false); assert.equal(scene.money,40);
  }
  const {sale,scene,building}=fixture();scene.isBattle=false;
  assert.equal(sale.sell(scene,building),false);
});
test('sold building cannot produce or be restored by wave/skill code',()=>{
  const {sale,scene,building}=fixture(); sale.sell(scene,building);
  scene.addArmy=()=>assert.fail('produced after sale');
  building.productArmy(2,1,1); building.checkProductArmy(100); building.restore(); building.update(1); building.checkAttack();
  assert.equal(building.node.active,false);
});
test('an already pending asynchronous production request is cancelled on sale',async()=>{
  const {sale,scene,building,Scene,modules,cc}=fixture();
  let complete; modules.libcocos.cocos.loadRes=()=>new Promise(resolve=>complete=resolve);
  cc.instantiate=()=>assert.fail('instantiated unit after sale');
  const pending=Scene.prototype.addArmy.call(scene,2,1,{x:0,y:0},building);
  sale.sell(scene,building);complete({});await pending;
  assert.equal(scene.armyArray.length,0);
});
test('both battle modes put sold construction in fallback, never in primary',()=>{
  const {sale,scene,building,data}=fixture(); sale.sell(scene,building);
  for (const mode of [0,1]) {
    data.gameMode=mode;
    const groups=sale.getChoiceGroups(scene.buildingChoice);
    assert.ok(!groups.primary.includes(1)); assert.ok(groups.fallback.includes(1));
    assert.ok([24,25,26].every(id=>groups.fallback.includes(id)));
    assert.ok(!groups.primary.includes(6));
    assert.ok(groups.primary.includes(2),'sold barracks retains factory prerequisite');
    for(let i=0;i<100;i++) {
      const result=sale.getChoice(scene.buildingChoice);
      assert.equal(result.length,3);assert.equal(new Set(result).size,3);
      if(groups.primary.length>=3) assert.ok(!result.includes(1));
    }
  }
});
test('sale releases exactly one turret construction slot',()=>{
  const {sale,scene,building}=fixture();building.type=5;
  scene.buildingChoice.choiceArray=[4,4];sale.sell(scene,building);
  assert.deepEqual(scene.buildingChoice.choiceArray,[4]);
  assert.ok(sale.getChoiceGroups(scene.buildingChoice).fallback.includes(4));
});
test('rebuilding restores previously purchased troop capacity and speed',()=>{
  const {sale,scene,building,data}=fixture();sale.sell(scene,building);
  data.gameMode=1;
  const fresh={type:2,pvpWay:0,node:{on(){},getChildByName(){return null;}},
    totalHp:500,attack:0,addBuildingArmyNum(type,count){this.quantity=(this.quantity||0)+count;},
    changeBuildingArmyCDTime(type,factor){this.speed=factor;}};
  sale.prepareBuilding(scene,fresh);
  assert.equal(fresh.quantity,2); assert.equal(fresh.speed,0.7);
  scene.buildingChoice.choiceArray.push(1);
  assert.ok(!sale.getChoiceGroups(scene.buildingChoice).fallback.includes(1),'limit enforced after rebuilding');
});
test('new battle choice resets sold history; old saves need no field',()=>{
  const {sale,scene,building,Choice}=fixture();sale.sell(scene,building);
  const fresh=new Choice();
  assert.ok(sale.getChoiceGroups(fresh).primary.includes(1));
});
test('checkpoint preserves sold types and snapshots construction history without aliasing',()=>{
  const {sale,scene,building,Scene,modules}=fixture();sale.sell(scene,building);
  scene.armyChoice={choiceArray:[]};modules.playerData.default.saveData=()=>{};
  Scene.prototype.saveBattle.call(scene);
  const saved=modules.playerData.default.saveBattleData;
  assert.deepEqual(Array.from(saved.soldBuildingTypes),[2]);
  assert.deepEqual(saved.buildingChoice,[6,15]);
  scene.buildingChoice.choiceArray.push(1);scene.buildingChoice.soldBuildingTypes.push(3);
  assert.deepEqual(saved.buildingChoice,[6,15]);
  assert.deepEqual(Array.from(saved.soldBuildingTypes),[2]);
});
test('rebuilding turret fills vacant first slot in both scenes',async()=>{
  const {sale,scene,modules,cc,Node,Scene,PvpScene}=fixture();
  scene.buildingPosArray=[{}, {}, {}, {}, {x:130,y:-180},{x:-130,y:-180}];
  const survivor=new Node();survivor.x=-130;survivor.y=-180;survivor.getComponent=()=>({type:5});
  scene.bgNode={getChildByName:()=>({addChild(){}})};
  for(const Type of [Scene,PvpScene]) {
    scene.buildingArray=[survivor];
    cc.instantiate=()=>{const node=new Node();node.getComponent=()=>({node,type:5,pvpWay:0,initBuilding(){}});return node;};
    const node=await Type.prototype.productBuilding.call(scene,5);
    assert.equal(node.x,130);assert.equal(node.y,-180);
  }
});

function constructionFixture(cards=false) {
  const f=fixture(); const {scene,Node,cc}=f;
  scene.isBattle=false;scene.uiNode=new Node('ui');scene.node.addChild(scene.uiNode);
  const panel=new Node('buildingChoice');scene.uiNode.addChild(panel);
  const card=new Node('choice1');card.active=cards;panel.addChild(card);
  const next=new Node('nextButton');next.addComponent(cc.Button).interactable=false;panel.addChild(next);
  for(const name of ['icon','ad','text'])next.addChild(new Node(name));
  const start=new Node('startButton');panel.addChild(start);
  scene.refreshBuildingChoice=()=>{scene.refreshCount=(scene.refreshCount||0)+1;};
  return {...f,panel,next,start};
}
test('construction sale keeps Start/Continue, unlocks affordability and restores pause',()=>{
  const {sale,scene,building,panel,next,start,cc}=constructionFixture();
  assert.equal(sale.canSell(scene,building),true);
  sale.open(scene,building);assert.equal(scene.isPause,true);
  const modal=scene._buildingSaleModal;
  modal.getChildByName('saleCard').getChildByName('confirmSale').handlers.click();
  assert.equal(scene.money,140);assert.equal(scene.isBattle,false);assert.equal(scene.isPause,false);
  assert.equal(panel.active,true);assert.equal(start.active,true);assert.equal(next.active,true);
  assert.equal(next.getComponent(cc.Button).interactable,true);
});
test('cancelling during construction preserves paid choice and all phase state',()=>{
  const {sale,scene,building,panel}=constructionFixture(true);
  sale.open(scene,building);
  scene._buildingSaleModal.getChildByName('saleCard').getChildByName('cancelSale').handlers.click();
  assert.equal(scene.isPause,false);assert.equal(scene.isBattle,false);assert.equal(scene.money,40);
  assert.equal(panel.active,true);assert.equal(panel.getChildByName('choice1').active,true);
  assert.equal(scene.refreshCount,undefined);assert.equal(building._sold,undefined);
});
test('selling with paid cards refreshes eligibility without losing or charging the choice',()=>{
  const {sale,scene,building,panel}=constructionFixture(true);
  sale.sell(scene,building);
  assert.equal(scene.refreshCount,1);assert.equal(scene.money,140);assert.equal(panel.active,true);
  assert.equal(panel.getChildByName('choice1').active,true);
});
test('overlapping construction controls lose both touch events to the building',()=>{
  const {sale,scene,building,next}=constructionFixture();
  sale.prepareBuilding(scene,building);
  const event={target:next,getID:()=>1,getLocation:()=>({x:50,y:50}),getStartLocation:()=>({x:50,y:50}),stopPropagation(){this.stops=(this.stops||0)+1;}};
  scene.node.handlers.touchstart(event);assert.equal(event.stops,1);
  scene.node.handlers.touchend(event);assert.equal(event.stops,2);assert.ok(scene._buildingSaleModal);
  assert.equal(scene.money,40);assert.equal(scene.isBattle,false);
});
test('drag, unrelated UI and blocking dialogs do not open sale or activate covered controls',()=>{
  for(const mode of ['drag','unrelated','pause','win','over','settings']) {
    const {sale,scene,building,next,Node}=constructionFixture();
    let target=next;
    if(mode==='unrelated') {target=new Node('speedButton');scene.uiNode.addChild(target);}
    if(['pause','win','over','settings'].includes(mode))scene.uiNode.addChild(new Node(mode));
    sale.prepareBuilding(scene,building);
    const event={target,getID:()=>1,getLocation:()=>({x:50,y:50}),getStartLocation:()=>({x:mode==='drag'?0:50,y:50}),stopPropagation(){this.stops=(this.stops||0)+1;}};
    scene.node.handlers.touchstart(event);scene.node.handlers.touchend(event);
    assert.equal(scene._buildingSaleModal,undefined,mode);
    if(mode==='drag')assert.equal(event.stops,2);
  }
});
