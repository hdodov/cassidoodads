/**
 * JUNE 13, 2022, 12:37 A.M.
 * https://buttondown.email/cassidoo/archive/openness-may-not-completely-disarm-prejudice-but/
 *
 * Create a loooong teeeext generator that takes in a string and an integer n,
 * and multiplies the vowels in the string by n.
 */

function longText(text: string, n: number): string {
	return text
		.split("")
		.map((c) => ("aeiou".indexOf(c) < 0 ? c : new Array(n).fill(c).join("")))
		.join("");
}

console.log(longText("hello world", 3));
console.log(longText("lol", 10));
