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

class Node {
	constructor(public name: string, public next: Node | null) {}
}

function search(a: Node, b: Node) {
	let node = a.next;

	while (node && node !== b && node !== b.next) {
		node = node?.next;
	}

	return node;
}

function findListIntersection(a: Node, b: Node) {
	return search(a, b) || search(b, a);
}

const n5 = new Node("n5", null);
const n4 = new Node("n4", n5);
const n3 = new Node("n3", n4);
const n2 = new Node("n2", n3);
const h1 = new Node("h1", n2); // h1 → n2 → n3 → n4 → n5
const h2 = new Node("h2", n4); //           h2 ↗

console.log(findListIntersection(h1, h2)); // returns n4
