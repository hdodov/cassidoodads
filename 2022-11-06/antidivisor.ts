/**
 * NOV. 6, 2022, 9:37 P.M.
 * https://buttondown.email/cassidoo/archive/everybody-gets-so-much-information-all-day-long/
 *
 * Given an integer `n`, print a balanced binary tree with `n` leaf nodes using
 * the characters `/`, ` `, and `\`.
 */

function antidivisor(n: number) {
	const result: number[] = [];
	let nonDivisors: number[] = [];

	for (let i = 2; i <= n; i++) {
		const div = n / i;
		if (div.toString() !== div.toFixed(0).toString()) {
			nonDivisors.push(i);
		} else if (nonDivisors.length) {
			result.push(nonDivisors[Math.round((nonDivisors.length - 1) / 2)]);
			nonDivisors = [];
		}
		// if (div.toString() !== div.toFixed(0).toString()) {
		// 	result.push(i);
		// }
	}

	return result;
}

console.log(antidivisor(100));
