export function grayCode(n) {
	if (! Number.isInteger(n)) {
		throw new TypeError(`grayCode(n): n - ${n} should be an integer`);
	}
	// end error checking

	let result = [];
	if (n<= 0) return result;

	result.push("0");
	result.push("1");

	for (let i=2; i < (1<<n); i = i<<1) {
		// reverse codes in result and add them to result
		for (let j = i-1; j >= 0; j--) {
			result.push(result[j]);
		}
		//append 0 to first half
		for (let k = 0; k < i; k++) {
			result[k]= "0" + result[k];
		}
		//append 1 to the second half
		for (let l = i ; l < 2*i ; l++) {
			result[l]= "1" + result[l];
		}
	}
	return result;
}

export default {
	grayCode,
}