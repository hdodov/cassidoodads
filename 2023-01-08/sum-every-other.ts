/**
 * JAN. 8, 2023, 10:41 P.M.
 * https://buttondown.email/cassidoo/archive/what-you-do-every-day-matters-more-than-what-you/
 * https://twitter.com/cassidoo/status/1612310127046017026
 * https://twitter.com/yandodov/status/1612912414252474391
 *
 * Given a number, sum every second digit in that number.
 */

function sumEveryOther(input: number): number {
	return input
		.toString()
		.split("")
		.reduce((arr, curr, i) => {
			const digit = parseInt(curr);
			if (i % 2 === 1 && !Number.isNaN(digit)) arr.push(digit);
			return arr;
		}, [] as number[])
		.reduce((a, b) => a + b);
}

console.log(sumEveryOther(548915381)); // 26
console.log(sumEveryOther(10)); // 0
console.log(sumEveryOther(1010.11)); // 1
console.log(sumEveryOther(1.12)); // 2
