/**
 * NOV. 13, 2022, 11:45 P.M.
 * https://buttondown.email/cassidoo/archive/normal-is-nothing-more-than-a-cycle-on-a-washing/
 *
 * Given a list of strings `arr`, and a max size `n`, return a new list where
 * the strings (from left to right) are joined together with a space, so that
 * each new string is less than or equal to the max size.
 */

function combineStrings(arr: string[], n: number) {
	const strings: string[] = [];

	arr.reduce((prev, curr, i) => {
		const combined = `${prev} ${curr}`;
		let result: string;

		if (combined.length <= n) {
			result = combined;
		} else {
			strings.push(prev);
			result = curr;
		}

		if (i === arr.length - 1) {
			strings.push(result);
		}

		return result;
	});

	return strings;
}

console.log(combineStrings(["a", "b", "c", "d", "e", "f", "g"], 5));
console.log(combineStrings(["a", "b", "c", "d", "e", "f", "g"], 12));
console.log(combineStrings(["alpha", "beta", "gamma", "delta", "epsilon"], 20));
