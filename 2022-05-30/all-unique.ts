/**
 * MAY 30, 2022, 1:54 A.M.
 * https://buttondown.email/cassidoo/archive/keep-your-face-always-toward-the-sunshine-and/
 */

function allUnique(input: string) {
	return input.split("").filter((c, i) => input.indexOf(c) !== i).length === 0;
}

console.log(allUnique("Cassidy"));
console.log(allUnique("cat & dog"));
console.log(allUnique("cat+dog"));
