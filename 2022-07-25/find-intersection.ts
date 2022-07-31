/**
 * JULY 25, 2022, 12:14 A.M.
 * https://buttondown.email/cassidoo/archive/discovering-the-truth-about-ourselves-is-a/
 *
 * Given two arrays A and B, return the indices at which the two arrays
 * intersect. If the two arrays have no intersection at all, return null. Extra
 * credit: how would you change your code if they were linked lists instead of
 * arrays, if the input were the two head nodes, and you returned the
 * intersection node?
 */

function findIntersection(a: number[], b: number[]) {
	const diff = b.length - a.length;
	let result = null;

	for (let i = a.length - 1; i >= 0; i--) {
		if (a[i] !== b[i + diff]) break;
		result = [i, i + diff];
	}

	return result;
}

const listA = [1, 4, 5, 6];
const listB = [2, 3, 4, 5, 6];

console.log(findIntersection(listA, listB));
