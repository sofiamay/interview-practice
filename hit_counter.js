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
		if (! timestamp instanceof Hit) {
			throw `${timestamp} is not a Hit instance`;
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

/* EXTRA (NOT ASKED FOR): 
    Ideally hits should be a class as well
*/

class Hit {
	constructor(timestamp) {
		// Time must be in miliseconds. Min time is a minute (after time 0 in 1970)
		if (timestamp < 60000) {
			throw `Hit(timestamp): timestamp ${timestamp} not valid. Too low`;
		}
		if (timestamp > Date.now()) {
			throw `Hit(timestamp): timestamp ${timestamp} not valid. Must be lower than current time.`;
		}
		if (! Number(isInteger)) {
			throw `Hit(timestamp): timestamp ${timestamp} not valid. Timestamp must be an integer representing milliseconds`;
		}
		this.date = new Date(timeStamp);
		this.val = timestamp;
	}

	// prints date in YYYY-MM-DD format
	printDate() {
		const date = (`0 ${this.date.getDate()}`).slice(-2);
		const month = (`0 ${this.date.getMonth() + 1}`).slice(-2);
		const year = this.date.getFullYear();
		const hours = this.date.getHours();
		const minutes = this.date.getMinutes();
		const seconds = this.date.getSeconds();
		return `${year}-${month}-${date}`;
	}

	// override
	valueOf() {
		return this.val;
	}

	//override
	toString() {
		return new String(this.valueOf());
	}
}
