/**
 * OCT. 23, 2022, 11:04 P.M.
 * https://buttondown.email/cassidoo/archive/everybody-gets-so-much-information-all-day-long/
 *
 * Given an integer `n`, print a balanced binary tree with `n` leaf nodes using
 * the characters `/`, ` `, and `\`.
 */

function printTree(n: number) {
	for (let i = 0; i < n; i++)
		console.log(" ".repeat(n - i - 1) + "/" + " ".repeat(i * 2) + "\\");
}

console.log(printTree(2));
