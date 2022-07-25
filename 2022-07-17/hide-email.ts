/**
 * JULY 17, 2022, 11:11 P.M.
 * https://buttondown.email/cassidoo/archive/if-one-is-lucky-a-solitary-fantasy-can-totally/
 *
 * Given a string that has a valid email address, write a function to hide the
 * first part of the email (before the @ sign), minus the first and last
 * character. For extra credit, add a flag to hide the second part after the @
 * sign to your function excluding the first character and the domain extension.
 */

function censor(input: string, last?: boolean) {
	return (
		input[0] +
		"*".repeat(Math.max(input.length - 2, 0)) +
		(last ? "*" : input[input.length - 1])
	);
}

function hideEmail(email: string, hideFull?: boolean) {
	let [name, domain] = email.split("@");

	if (hideFull) {
		const [name, ...rest] = domain.split(".");
		domain = [censor(name, true), ...rest].join(".");
	}

	return `${censor(name)}@${domain}`;
}

console.log(hideEmail("example@example.com"));
console.log(hideEmail("example+test@example.co.uk", true));
