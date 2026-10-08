const assert = require('node:assert/strict');
const { test } = require('node:test');
const fs = require('node:fs');

test('runtime bundle and settings keep the offline energy cap at 144', () => {
  const bundle = fs.readFileSync('assets/main/index.energy144.js', 'utf8');
  const settings = fs.readFileSync('src/settings.energy144.js', 'utf8');
  const entry = fs.readFileSync('index.html', 'utf8');
  assert.match(bundle, /HPLimit = 144/);
  assert.doesNotMatch(bundle, /HPLimit = 30/);
  assert.match(settings, /main: "energy144"/);
  assert.match(entry, /src\/settings\.energy144\.js\?v=energy144/);
});
