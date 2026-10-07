/* Local title-screen redemption codes. Rewards are stored in the normal save. */
window.offlineRedeem = (() => {
  const rewards = Object.freeze({ vip666: 600, vip888: 600 });

  function claim(player, enteredCode) {
    const code = String(enteredCode ?? "").trim().toLowerCase();
    const reward = Object.hasOwn(rewards, code) ? rewards[code] : 0;
    if (!reward) return { ok: false, message: "兑换码无效" };

    const misc = player.b_misc && typeof player.b_misc === "object" ? player.b_misc : {};
    const redeemed = misc.offlineRedeemCodes && typeof misc.offlineRedeemCodes === "object"
      ? misc.offlineRedeemCodes
      : {};
    if (redeemed[code]) return { ok: false, message: "这个兑换码已经领取过了" };

    const previousMisc = player.b_misc;
    const previousItems = player.itemArray.map(row => row.slice());
    player.b_misc = { ...misc, offlineRedeemCodes: { ...redeemed, [code]: 1 } };
    try {
      player.addItem(2, reward);
      player.saveDataRem();
      player.saveData();
    } catch (error) {
      // A failed local write must leave the reward available for a later retry.
      player.b_misc = previousMisc;
      player.itemArray = previousItems;
      throw error;
    }
    return { ok: true, code, reward, message: `兑换成功，获得${reward}天然气` };
  }

  return { claim, codes: Object.keys(rewards) };
})();
