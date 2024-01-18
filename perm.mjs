export const fixedPermutations = (s, n) => {
	let res = [];
	for (let i = 0; i < s.length - n + 1; i++) {
		res.push(s.substring(i, i + n));
	}
	return res;
};

export const permutations = () => {};
