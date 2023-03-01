/**
 * FEB. 26, 2023, 9:52 P.M.
 * https://buttondown.email/cassidoo/archive/like-what-you-do-and-then-you-will-do-your-best/
 * https://twitter.com/cassidoo/status/1630053184864505859
 * https://twitter.com/yandodov/status/1630819860975431680
 *
 * Given a list of numbers, return all groups of repeating consecutive numbers.
 */

function repeatedGroups(input: number[]): number[][] {
	return (input.join("").match(/(\d)\1+/g) ?? []).map((str) =>
		str.split("").map((char) => parseInt(char))
	);
}

console.log(repeatedGroups([1, 2, 2, 4, 5]));
// [[2, 2]]

console.log(repeatedGroups([1, 1, 0, 0, 8, 4, 4, 4, 3, 2, 1, 9, 9]));
// [[1, 1], [0, 0], [4, 4, 4], [9, 9]]

console.log(repeatedGroups([0, 1, 0, 1, 1, 3, 3, 7]));
// [[1, 1], [3, 3]]
