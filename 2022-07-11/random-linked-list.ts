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

interface NodeObject {
	val: number;
	next: NodeObject | null | "CIRCULAR";
	random: NodeObject | null | "CIRCULAR";
}

function deepCopy(node: Node, seen: Node[] = []): NodeObject | "CIRCULAR" {
	if (seen.includes(node)) return "CIRCULAR";

	seen = [...seen, node];

	return {
		val: node.val,
		next: node.next && deepCopy(node.next, seen),
		random: node.random && deepCopy(node.random, seen),
	};
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
console.log(JSON.stringify(deepCopy(nodes[0]), null, 2));
