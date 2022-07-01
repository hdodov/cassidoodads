/**
 * JUNE 26, 2022, 11:53 P.M.
 * https://buttondown.email/cassidoo/archive/fight-for-the-things-that-you-care-about-but-do/
 *
 * Given a string `str` and a set of words `dict`, find the longest word in
 * `dict` that is a subsequence of `str`.
 */

const str = "abppplee";
const dict = ["able", "ale", "apple", "bale", "kangaroo"];

function longestWord(str: string, dict: string[]) {
	return dict
		.filter((word) => {
			let searchIndex = -1;

			for (const char of word) {
				const charIndex = str.indexOf(char, searchIndex + 1);

				if (charIndex <= searchIndex) {
					return false;
				}

				searchIndex = charIndex;
			}

			return true;
		})
		.sort((a, b) => b.length - a.length)[0];
}

console.log(longestWord(str, dict));
