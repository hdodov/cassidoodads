/**
 * APRIL 30, 2023, 10:26 P.M. https://buttondown.email/cassidoo/archive/5922/
 * https://twitter.com/cassidoo/status/1668096898773794816
 * https://twitter.com/yandodov/status/1668127998946557952
 *
 * Given an array `arr` and integers `n` and `m`, remove `n` elements from the
 * front of the array, and `m` elements from the back. Assume that `n + m <=
 * arr.length`.
 */

function trimArray(
	input: number[],
	removeFront: number,
	removeBack: number
): number[] {
	return input.filter((_, i, arr) => {
		return i >= removeFront && i < arr.length - removeBack;
	});
}

console.log(trimArray([1, 2, 3, 4, 5, 6], 2, 1));
// [3, 4, 5]

console.log(trimArray([6, 2, 4, 3, 7, 1, 3], 5, 0));
// [1, 3]

console.log(trimArray([1, 7], 0, 0));
// [1, 7]
