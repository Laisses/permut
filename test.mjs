import assert from 'node:assert/strict';

import { fixedPermutations, permutations } from "./perm.mjs";


const test_fixedPermutations = () => {
	console.error("test_fixedPermutations()...");

	assert.deepEqual(
		fixedPermutations("texto", 1),
		[ "t", "e", "x", "t", "o" ],
	);
	assert.deepEqual(
		fixedPermutations("texto", 2),
		[ "te", "ex", "xt", "to" ],
	);
	assert.deepEqual(
		fixedPermutations("texto", 3),
		[ "tex", "ext", "xto" ],
	);
	assert.deepEqual(
		fixedPermutations("texto", 4),
		[ "text", "exto" ],
	);
	assert.deepEqual(
		fixedPermutations("texto", 5),
		[ "texto" ],
	);
	assert.deepEqual(
		fixedPermutations("texto", 6),
		[],
	);

	assert.deepEqual(
		fixedPermutations("", 1),
		[],
	);
};

const test_permutations = () => {
	console.error("test_permutations()...");

	assert.deepEqual(
		permutations("boboca"),
		[
			"boboca",
			"boboc", "oboca",
			"bobo", "oboc", "boca",
			"bob", "obo", "boc", "oca",
			"bo", "ob", "oc", "ca"
		],
	);

	assert.deepEqual(permutations("oi"), [ "oi" ]);
	assert.deepEqual(permutations("o"),  []);
	assert.deepEqual(permutations(""),   []);
};



const main = () => {
	const testFns = [
		test_fixedPermutations,
		test_permutations,
	];

	for (const fn of testFns) {
		fn();
	}

	console.error("All tests passed!");
};


main();
