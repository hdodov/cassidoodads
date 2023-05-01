/**
 * APRIL 30, 2023, 10:26 P.M. https://buttondown.email/cassidoo/archive/5528/
 * https://twitter.com/cassidoo/status/1652877857826152448
 * https://twitter.com/yandodov/status/1652921412816863233
 *
 * Given a non-empty array containing only non-negative integers, return the
 * list with trailing and leading zeroes removed.
 */

function removeZeroes(input: number[]): number[] {
	return (
		input
			.join("")
			.match(/^(0*)([0-9]*?)(0*)$/)?.[2]
			.split("")
			.map((num) => parseInt(num)) ?? []
	);
}

function addBabies(input: number[]): (string | number)[] {
	const matches = input.join("").match(/^(0*)([0-9]*?)(0*)$/);
	const numbers = matches?.[2].split("").map((num) => parseInt(num)) ?? [];
	const babygen = (str: string) => str.split("").map(() => "👶");

	return [
		...babygen(matches?.[1] ?? ""),
		...numbers,
		...babygen(matches?.[3] ?? ""),
	];
}

function test(input: number[]) {
	console.log("😒 removeZeroes()", removeZeroes(input));
	console.log("🤩 addBabies()", addBabies(input));
}

test([0, 0, 0, 3, 1, 4, 1, 5, 9, 0, 0, 0, 0]);
// 😒 removeZeroes() [3, 1, 4, 1, 5, 9]
// 🤩 addBabies() [👶, 👶, 👶, 3, 1, 4, 1, 5, 9, 👶, 👶, 👶, 👶]

test([0, 0, 1, 3, 0, 3, 7, 0]);
// 😒 removeZeroes() [1, 3, 0, 3, 7]
// 🤩 addBabies() [👶, 👶, 1, 3, 0, 3, 7, 👶]

test([0, 0, 0]);
// 😒 removeZeroes() []
// 🤩 addBabies() [👶, 👶, 👶]

test([8]);
// 😒 removeZeroes() [8]
// 🤩 addBabies() [8]
