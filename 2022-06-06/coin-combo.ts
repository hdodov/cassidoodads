/**
 * JUNE 6, 2022, 12:20 A.M.
 * https://buttondown.email/cassidoo/archive/dont-get-bitter-just-get-better-alyssa-edwards/
 */

function coinCombo(coins: number[], amount: number): number[] {
	for (let coin of coins.sort((a, b) => b - a)) {
		coins = coins.filter((c) => c !== coin);

		for (let n = Math.floor(amount / coin); n > 0; n--) {
			let remainder = amount - coin * n;
			let currentCoins = new Array(n).fill(coin);

			if (remainder === 0) return currentCoins;

			let combo = coinCombo(coins, remainder);
			if (combo.length) return combo.concat(currentCoins);
		}
	}

	return [];
}

console.log(coinCombo([2, 3, 5, 7], 17));
console.log(coinCombo([2, 3, 5], 11));
