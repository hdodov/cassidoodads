/**
 * JULY 11, 2022, 12:05 A.M.
 * https://buttondown.email/cassidoo/archive/happiness-can-exist-only-in-acceptance-george/
 *
 * Given a linked list, such that each node contains an additional random
 * pointer which could point to any node in the list, or null, make a deep copy
 * of the list and return the head node of the new copy.
 */

class Node {
	val: number;
	next: Node | null = null;
	random: Node | null = null;

	constructor(val: number) {
		this.val = val;
	}
}

function deepCopy(node: Node) {
	const map = new Map<Node, Node>();

	return (function copy(node: Node | null) {
		if (!node) return node;

		let mapped = map.get(node);
		if (mapped) return mapped;

		mapped = new Node(node.val);
		map.set(node, mapped);
		mapped.next = copy(node.next);
		mapped.random = copy(node.random);

		return mapped;
	})(node);
}

// Generate 5 random nodes with `val` from 0 to 4.
const nodes = new Array(5).fill(null).map((_, i) => new Node(i));
const randoms = [...nodes, null]; // possible random values

// Link nodes and randomize randoms.
nodes.forEach((node, i) => {
	node.next = nodes[i + 1] ?? null;
	node.random = randoms[Math.floor(Math.random() * randoms.length)];
});

// Print the deep-copied head node.
console.log(deepCopy(nodes[0]));
