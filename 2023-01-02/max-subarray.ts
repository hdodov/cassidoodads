/**
 * JAN. 2, 2023, 1:46 A.M.
 * https://buttondown.email/cassidoo/archive/from-a-small-seed-a-mighty-trunk-may-grow/
 * https://twitter.com/cassidoo/status/1609817353352806402
 * https://twitter.com/yandodov/status/1611246412125044736
 *
 * Given an array of integers `arr` and an integer `n`, return a subarray of
 * `arr` of length `n` where the sum is the largest. Make sure you maintain the
 * order of the original array, and if `n` is greater than `arr.length`, you can
 * choose what you want to return.
 */

const reduceSum = (a: number, b: number) => a + b;
const reduceMaxSum = (a: number[], b: number[]) =>
	a.reduce(reduceSum) > b.reduce(reduceSum) ? a : b;

function maxSubarray(arr: number[], n: number): number[] {
	if (n > arr.length) {
		return Array(arr.length)
			.fill(0)
			.map((_, i) => maxSubarray(arr, i + 1))
			.reduce(reduceMaxSum);
	}

	return Array(arr.length - n + 1)
		.fill(0)
		.map((_, i) => arr.slice(i, i + n))
		.reduce(reduceMaxSum);
}

console.log(maxSubarray([-4, 2, -5, 1, 2, 3, 6, -5, 1], 4)); // [ 1, 2, 3, 6 ]
console.log(maxSubarray([-4, 2, -5, 3, -1, 6, -5, 1], 99)); // [ 3, -1, 6 ]
console.log(maxSubarray([1, 2, 0, 5], 2)); // [ 0, 5 ]
