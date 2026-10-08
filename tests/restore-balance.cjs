const fs = require('node:fs');
const {execFileSync} = require('node:child_process');
const acorn = require('C:/Users/41864/AppData/Local/npm-cache/_npx/85e276aa91ec9cfc/node_modules/acorn');
const version = 'balance20261008';
const walk = (node, visit) => {
  if (!node || typeof node !== 'object') return;
  if (node.type) visit(node);
  for (const [key, value] of Object.entries(node)) {
    if (key === 'start' || key === 'end') continue;
    if (Array.isArray(value)) value.forEach(n => walk(n, visit));
    else if (value && typeof value === 'object') walk(value, visit);
  }
};
let code = fs.readFileSync('assets/main/index.energy144.js', 'utf8');
let table;
walk(acorn.parse(code, {ecmaVersion:'latest'}), n => {
  if(n.type==='ObjectExpression' && n.properties.some(p=>p.key?.name==='playerData')) table=n;
});
const edits = [];
const transforms = [];
function patch(module, method, transform) {
  transforms.push({module,method,transform});
  const factory=table.properties.find(p=>p.key.name===module).value.elements[0];
  let found;
  walk(factory,n=>{
    if(n.type==='AssignmentExpression' && n.left.property?.name===method && n.right.type==='FunctionExpression') found=n.right.body;
  });
  if(!found) throw Error(`Missing ${module}.${method}`);
  edits.push([found.start+1,found.end-1,transform(code.slice(found.start+1,found.end-1))]);
}
patch('mainScene','page1Button', body=> {
  if(!body.includes('window.offlineFortress.roll(l)')) throw Error('Missing lottery hook');
  return body.replace('window.offlineFortress.roll(l)', 'window.offlineFortress.roll(c === -2 ? 5 : 1)');
});
patch('mainScene','refreshDaily', body=>
  '\nwindow.offlineDaily.sync(p.default,u.default);\n'+body+'\nwindow.offlineDaily.refreshUI(this,p.default);\n');
patch('mainScene','finishDaily', body=> `
  if (parseInt(t) === 4) {
    if (this.uiLayer.getChildByName("popUI").getChildByName("getItem").active) return;
    if (!window.offlineDaily.claim(p.default, u.default)) { this.refreshDaily(); return; }
    y.default.inst.playAudio("starcraft/click");
    this.openGetItem([[2,30]], 0, true);
    this.refreshDaily();
    return;
  }
`+body);
patch('gameData','hasDaily',()=> `
  window.offlineDaily.sync(r.default,t);
  if (!window.offlineDaily.claimed(r.default)) return true;
  for (let index=0; index<3; index++) if(r.default.dailyArray[index]>=t.dailyNeed[index]) return true;
  return false;
`);
patch('mainScene','doubleGetItem',body=> `
  const rewardPanel = this.uiLayer.getChildByName("popUI").getChildByName("getItem");
  const doubleButton = rewardPanel.getChildByName("button2");
  if (this._rewardDoubleBusy || !rewardPanel.activeInHierarchy || !doubleButton.activeInHierarchy) return Promise.resolve();
  this._rewardDoubleBusy = true;
  const run = () => { ${body} };
  return Promise.resolve().then(run).finally(() => { this._rewardDoubleBusy = false; });
`);
patch('building','checkAttack',body=>body.replaceAll('u.default.inst.playAudio("starcraft/attack_building")','u.default.inst.playAudio(this._fortress ? "starcraft/attack_tank" : "starcraft/attack_building")'));
for(const [start,end,replacement] of edits.sort((a,b)=>b[0]-a[0])) code=code.slice(0,start)+replacement+code.slice(end);
acorn.parse(code,{ecmaVersion:'latest'});
fs.writeFileSync(`assets/main/index.${version}.js`,code);
fs.copyFileSync('assets/main/config.energy144.json',`assets/main/config.${version}.json`);
fs.writeFileSync(`src/settings.${version}.js`,fs.readFileSync('src/settings.energy144.js','utf8').replaceAll('energy144',version));
for(const name of [null,'mainScene','gameData','building']) {
  const file=name?`deobfuscated/modules/${name}.js`:'deobfuscated/index.beautified.js';
  const previous=execFileSync('git',['show',`HEAD:${file}`],{encoding:'utf8',maxBuffer:20*1024*1024});
  const tree=acorn.parse(previous,{ecmaVersion:'latest'});
  let moduleTable;
  if(!name)walk(tree,n=>{if(n.type==='ObjectExpression'&&n.properties.some(p=>p.key?.name==='playerData'))moduleTable=n;});
  const changes=[];
  for(const job of transforms.filter(job=>!name||job.module===name)) {
    const scope=name?tree:moduleTable.properties.find(p=>p.key.name===job.module).value.elements[0];
    let body;
    walk(scope,n=>{if(n.type==='AssignmentExpression'&&n.left.property?.name===job.method&&n.right.type==='FunctionExpression')body=n.right.body;});
    changes.push([body.start+1,body.end-1,job.transform(previous.slice(body.start+1,body.end-1))]);
  }
  let result=previous;
  for(const [start,end,replacement] of changes.sort((a,b)=>b[0]-a[0])) result=result.slice(0,start)+replacement+result.slice(end);
  fs.writeFileSync(file,result);
}
let html=fs.readFileSync('index.html','utf8').replaceAll('energy144',version);
html=html.replace('<script src="offline-fortress.js"></script>',`<script src="offline-fortress.js?v=${version}"></script>\n    <script src="offline-daily.js?v=${version}"></script>`);
fs.writeFileSync('index.html',html);
console.log('Updated runtime, entry, configuration and readable module copies.');
