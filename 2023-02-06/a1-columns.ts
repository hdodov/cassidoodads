/**
 * FEB. 6, 2023, 5:31 A.M.
 * https://buttondown.email/cassidoo/archive/talent-without-working-hard-is-nothing-cristiano/
 * https://twitter.com/cassidoo/status/1622484679537438720
 * https://twitter.com/yandodov/status/1622834329809215489
 *
 * Spreadsheet programs often use the A1 Reference Style to refer to columns.
 * Given a column name in this style, return its column number.
 */

function a1Column(input: string): number {
	return input
		.split("")
		.reverse()
		.reduce((sum, char, i) => {
			const value = char.charCodeAt(0) - 64;
			return sum + value * Math.pow(26, i);
		}, 0);
}

console.log(a1Column("A")); // 1
console.log(a1Column("B")); // 2
console.log(a1Column("C")); // 3
console.log(a1Column("Z")); // 26
console.log(a1Column("AA")); // 27
console.log(a1Column("AB")); // 28
console.log(a1Column("AAA")); // 703
console.log(a1Column("ABC")); // 731
console.log(a1Column("ZAB")); // 17604
