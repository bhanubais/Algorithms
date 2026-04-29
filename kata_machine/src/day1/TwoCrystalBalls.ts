export default function two_crystal_balls(breaks: boolean[]): number {
	const n = breaks.length;
	const jmpAmount = Math.floor(Math.sqrt(n));
	let i = jmpAmount;

	// find the first jump point where the first ball breaks
	for (; i < n; i += jmpAmount) {
		if (breaks[i]) break;
	}
	// reset to previous jump point
	i -= jmpAmount;

	// Iterate from the previous jump point to search first break point
	for (; i < n; i++) {
		if (breaks[i]) {
			return i;
		}
	}

	return -1;
}

/**
 * Method: 1
 * --------------
export default function two_crystal_balls(breaks: boolean[]): number {
	const n = breaks.length;
	const jmpAmount = Math.floor(Math.sqrt(n));
	let lastJmp = 0;

	for (let i = jmpAmount; i < n; i += jmpAmount) {
		// first ball broken
		if (breaks[i]) {
			// search linearly from last jump point to current jump point
			for (let j = lastJmp; j < i; j++) {
				// second ball broken => we found the minimum broken point
				if (breaks[j]) {
					return j;
				}
			}
			lastJmp = i;
		}
	}
	return -1;
}
*/
