/**
 * MARCH 5, 2023, 9:08 P.M.
 * https://buttondown.email/cassidoo/archive/you-should-celebrate-who-you-are-eva-mendes/
 * https://twitter.com/cassidoo/status/1632579528785526785
 * https://twitter.com/yandodov/status/1634063552561512449
 *
 * If you mix up the order of letters in a word, many people can slitl raed and
 * urenadnstd tehm. Write a function that takes an input sentence, and mixes up
 * the insides of words (anything longer than 3 letters).
 */

function scramble(input: string): string {
	return input.replace(/[A-Za-z]{4,}/g, (match) => {
		const chars = Array.from(match);
		const firstChar = chars.shift();
		const lastChar = chars.pop();

		for (let l = chars.length, i = l; i >= 0; i--) {
			const randomIndex = Math.floor(Math.random() * l);
			const removedChars = chars.splice(i, 1);
			chars.splice(randomIndex, 0, ...removedChars);
		}

		return [firstChar, ...chars, lastChar].join("");
	});
}

console.log(scramble("A quick brown fox jumped over the lazy dog."));
// A qicuk bowrn fox jmeupd oevr the lzay dog.

console.log(scramble("I forget where I parked."));
// I frgeot wehre I parekd.

console.log(scramble("Cookies smell good, I'm hungry."));
// Cookeis semll good, I'm hugrny.

console.log(scramble("Chat GPT generates sentences."));
// Caht GPT geanerets setennces.
