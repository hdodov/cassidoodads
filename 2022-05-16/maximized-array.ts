/**
 * MAY 16, 2022, 1:12 A.M.
 * https://buttondown.email/cassidoo/archive/i-think-its-just-as-important-what-you-say-no-to/
 */

let arr1 = [7, 4, 10, 0, 1];
let arr2 = [9, 7, 2, 3, 6];

function maximizedArray(a1: number[], a2: number[]) {
	return a1
		.concat(a2)
		.sort((a, b) => (a < b ? 1 : -1))
		.reduce((p, c) => {
			if (p.indexOf(c) < 0) p.push(c);
			return p;
		}, [])
		.splice(0, a1.length);
}

console.log(maximizedArray(arr1, arr2));
