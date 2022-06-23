/**
 * JUNE 19, 2022, 9:37 P.M.
 * https://buttondown.email/cassidoo/archive/it-takes-a-lot-of-hard-work-to-remain-positive/
 *
 * Given a Fibonacci number, give the previous Fibonacci number. If the number
 * given is not a Fibonacci number, return -1.
 */

function previousFibonacci(input: number) {
	let n1 = 0;
	let n2 = 1;

	while (n2 <= input) {
		if (n2 === input) return n1;
		n2 = n1 + n2;
		n1 = n2 - n1;
	}

	return -1;
}

console.log(previousFibonacci(0));
console.log(previousFibonacci(1));
console.log(previousFibonacci(2));
console.log(previousFibonacci(3));
console.log(previousFibonacci(4));
console.log(previousFibonacci(5));
console.log(previousFibonacci(144));
console.log(previousFibonacci(145));
