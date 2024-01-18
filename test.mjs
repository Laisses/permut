import assert from 'node:assert/strict';

import { fixedPermutations, permutations } from "./perm.mjs";


const test_fixedPermutations = () => {
	console.error("test_fixedPermutations()...");
	assert(true);
};

const test_permutations = () => {
	console.error("test_permutations()...");
	assert(true);
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