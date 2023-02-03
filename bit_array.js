/*
A bit array is a space efficient array that holds a value of 1 or 0 at each index.

init(size): initialize the array with size
set(i, val): updates index at i with val where val is either 1 or 0.
get(i): gets the value at index i.

*/

export class BitArray {
constructor(size) {
		if (! Number.isInteger(size)) throw new TypeError('new BitArray(size): size must be an integer');
		// -- end error checking --
		this.size = size;
		this.map = new Map();
	}
	static init(size) {
		return new BitArray(size);
	}

	get(i) {
		if (! Number.isInteger(i)) throw new TypeError('i must be an integer');
		if (i >= this.size || i < 0) {
			throw new RangeError('bitArray.get(i): i is out of range');
		}
		// -- end error checking --
		if (this.map.has(i)) {
			return this.map.get(i);
		} else {
			return 0;
		}
	}

	set(i, val) {
		if ((! Number.isInteger(i)) || (! Number.isInteger(val)) ) throw new TypeError('i and val must be an integers');
		if (i >= this.size || i < 0) {
			throw new RangeError('bitArray.set(i, val): val is out of range of the size of BitArray');
		}
		if (! [0,1].includes(val)) {
			throw new TypeError('bitArray.set(i, val): val must be eitehr 0 or 1');
		}
		// -- end error checking --

		if (this.map.has(i)) {
			if (val == 0) {
				this.map.delete(i);
			} else {
				this.map.set(i, val);
			}
		} else {
			// map doesn't have i as a key
			if (val == 1) {
				this.map.set(i, val);
			}
		}
	}
}

export default {
	BitArray,
}