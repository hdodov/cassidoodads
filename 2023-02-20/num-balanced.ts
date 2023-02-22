/**
 * FEB. 20, 2023, 1:24 A.M.
 * https://buttondown.email/cassidoo/archive/to-think-that-everybodys-like-you-is-silly/
 * https://twitter.com/cassidoo/status/1627569313497350144
 * https://twitter.com/yandodov/status/1628459103595945984
 *
 * Given a string of parenthesis, return the number of parenthesis you need to
 * add to the string in order for it to be balanced.
 */

function numBalanced(input: string): number {
	return Math.abs(
		input
			.split("")
			.map((char) => (char === "(" ? 1 : -1))
			.reduce((curr, sum) => sum + curr, 0)
	);
}

console.log(numBalanced("()")); // 0
console.log(numBalanced("(()")); // 1
console.log(numBalanced("))()))))()")); // 6
console.log(numBalanced("))((")); // 0?
