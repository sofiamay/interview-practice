/*
Design and implement a HitCounter class that keeps track of requests (or hits). It should support the following operations:
	- record(timestamp): records a hit that happened at timestamp
	- total(): returns the total number of hits recorded
	- range(lower, upper): returns the number of hits that occurred between timestamps lower and upper (inclusive)

What if there's limited memory
*/


/*
1) We'll assume that hits are recorded in chronological order

2) If limited memory, we'll implement a queue
*/

class HitCounter {
	constructor(maxHits=null) {
		this.hits = [];
		this.maxHits = maxHits;
	}

	record(timestamp) {
		if (! Number.isInteger(timestamp)) {
			throw `${timestamp} is not a time in milliseconds`;
		}
		this.hits.push(timestamp);

		if (this.maxHits && (this.hits.length > this.maxHits)) {
			this.hits.shift();
		}
	}

	total() {
		return this.hits.length;
	}

	range(lower, upper) {
		if (lower > upper) {
			throw `range not valid`;
		}

		let count = 0;
		for (let i=0; i<this.hits.length; i++) {
			let current = this.hits[i];
			if (current > upper) {
				break;
			} else if (current >= lower) {
				count++;
			}
		}
		return count;
	}
}