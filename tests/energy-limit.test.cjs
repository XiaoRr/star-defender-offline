const assert = require('node:assert/strict');
const { test } = require('node:test');
const fs = require('node:fs');

test('runtime bundle and settings keep the offline energy cap at 144', () => {
  const entry = fs.readFileSync('index.html', 'utf8');
  const settingsPath = entry.match(/src="(src\/settings\.[^"]+\.js)/)[1];
  const settings = fs.readFileSync(settingsPath, 'utf8');
  const version = settings.match(/main: "([^"]+)"/)[1];
  const bundle = fs.readFileSync(`assets/main/index.${version}.js`, 'utf8');
  assert.match(bundle, /HPLimit = 144/);
  assert.doesNotMatch(bundle, /HPLimit = 30/);
  assert.ok(fs.existsSync(`assets/main/config.${version}.json`));
});
