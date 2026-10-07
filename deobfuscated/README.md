# 解混淆交付说明（star-defender-offline）

源文件：`assets/main/index.8182a.js`（约 2MB，browserify 打包 + 压缩）。
当前运行版本为 `assets/main/index.27d4c16c.js`；建筑出售涉及的建造、生产和抽选方法已同步到模块副本与美化包，可读业务逻辑位于根目录 `offline-building-sale.js`。
"混淆"实质 = **browserify 模块打包 + 变量名压缩**，无控制流扁平化/字符串加密，
因此大部分可还原。本目录为解混淆产物。

## 产物清单

| 文件 | 说明 |
|---|---|
| `index.beautified.js` | 全量美化版（35k 行），保留原始单字母变量 |
| `modules/*.js`（145 个） | 按 browserify 模块表拆分的独立模块，已美化、带 `// module:` 与 `// deps:` 头，全部通过 `node --check` |
| `_module_index.json` | 入口列表 + 模块清单 |
| `balance-logic-readable.js` | 核心平衡逻辑的**重命名+注释**可读版（startNewWave / getEnemyArrayWithLevel / initEnemy） |

## 关键模块定位

| 关注点 | 模块 |
|---|---|
| 每波刷怪、fac×1.07^波 预算 | `modules/battleScene.js`（`startNewWave`/`spawnEnemy`） |
| 每波数量采购、1.05^关 成长 | `modules/stageData.js`（`getEnemyArrayWithLevel`） |
| 单体属性、fac×1.06^波 | `modules/starEnemy.js`（`initEnemy`） |
| 关卡/敌人配置表 | `modules/stageData.js`、`modules/enemy.js` |

## 方法与局限

- 拆分：用 acorn 解析 `window.__require = (function e(t,i,n){...})(模块表,缓存,入口)`，
  取 `arguments[0]` 模块表，逐模块切片写出。
- 美化：jsbeautifier。
- 局限：局部变量为函数级单字母名，**无法安全地全局自动重命名**；
  故仅对最关键的平衡逻辑做了人工重命名（见 `balance-logic-readable.js`）。
  其余模块保留原名，但已拆包+美化，可直接阅读。
