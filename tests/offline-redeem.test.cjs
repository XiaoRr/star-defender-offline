const assert = require('node:assert/strict');
const { test } = require('node:test');
const fs = require('node:fs');
const vm = require('node:vm');

const window = {};
vm.runInNewContext(fs.readFileSync('offline-redeem.js', 'utf8'), { window });

test('each valid code awards 600 gas once and persists redemption', () => {
  let saves = 0;
  const player = {
    b_misc: {},
    itemArray: [[2, 30]],
    addItem(type, amount) {
      assert.equal(type, 2);
      this.itemArray[0][1] += amount;
    },
    saveDataRem() {},
    saveData() { saves += 1; },
  };

  const first = window.offlineRedeem.claim(player, ' VIP666 ');
  assert.equal(first.ok, true);
  assert.equal(first.code, 'vip666');
  assert.equal(first.reward, 600);
  assert.equal(first.message, '兑换成功，获得600天然气');
  assert.equal(player.itemArray[0][1], 630);
  assert.equal(window.offlineRedeem.claim(player, 'vip666').ok, false);
  assert.deepEqual(window.offlineRedeem.claim(player, 'VIP888').reward, 600);
  assert.equal(player.itemArray[0][1], 1230);
  assert.equal(saves, 2);
  player.b_misc = JSON.parse(JSON.stringify(player.b_misc));
  assert.equal(window.offlineRedeem.claim(player, 'vip888').ok, false);
});

test('unknown code does not change the save', () => {
  const player = { b_misc: {}, addItem() { assert.fail('invalid code awarded a reward'); }, saveDataRem() {}, saveData() {} };
  assert.equal(window.offlineRedeem.claim(player, 'vip999').ok, false);
  assert.equal(window.offlineRedeem.claim(player, 'constructor').ok, false);
  assert.deepEqual(player.b_misc, {});
});

test('failed persistence rolls back reward and claim status', () => {
  const player = {
    b_misc: {}, itemArray: [[2, 10]],
    addItem(type, amount) { this.itemArray[0][1] += amount; },
    saveDataRem() {}, saveData() { throw new Error('storage full'); },
  };
  assert.throws(() => window.offlineRedeem.claim(player, 'vip666'), /storage full/);
  assert.equal(player.itemArray[0][1], 10);
  assert.equal(player.b_misc.offlineRedeemCodes, undefined);
});
