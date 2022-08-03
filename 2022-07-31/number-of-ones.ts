/**
 * JULY 31, 2022, 10:44 P.M.
 * https://buttondown.email/cassidoo/archive/science-is-not-a-boys-game-its-not-a-girls-game/
 *
 * Given an integer n, count the total number of 1 digits appearing in all
 * non-negative integers less than or equal to n.
 */

function numberOfOnes(n: number) {
	return n
		.toString()
		.split("")
		.map((char) => parseInt(char))
		.reverse()
		.reduce((sum, digit, i) => {
			const mul = Math.pow(10, i);

			sum += Math.floor(n / (mul * 10)) * mul;

			if (digit > 1) {
				sum += mul;
			} else if (digit === 1) {
				sum += (n % mul) + 1;
			}

			return sum;
		}, 0);
}

console.log(numberOfOnes(14));
