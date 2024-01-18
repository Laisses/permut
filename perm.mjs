export const fixedPermutations = (s, n) => {
	let res = [];
	for (let i = 0; i < s.length - n + 1; i++) {
		res.push(s.substring(i, i + n));
	}
	return res;
};

const removeDuplicates = arr =>
	Array.from(new Set(arr));

export const permutations = s => {
	let res = [];
	for (let i = 2; i <= s.length; i++) {
		res = res.concat(removeDuplicates(fixedPermutations(s, i)));
	}
	return res.sort((a, b) => b.length - a.length);
};
