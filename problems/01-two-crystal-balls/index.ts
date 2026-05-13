export function two_crystal_balls(breaks: boolean[]): number {
	// TODO: Implement the O(sqrt(n)) jump search algorithm
	// Return the index of the first `true`, or -1 if none exists.
	const n = breaks.length;
	const jump_length = Math.floor(Math.sqrt(n));

	let step = 0;

	// First the first jump point where the first ball breaks
	while (step < n) {
		if (breaks[step]) {
			break;
		}
		step += jump_length;
	}

	// Iterate from the previous jump to the searched breaking point.
	// Ensure we don't start at a negative index and don't go out of bounds.
	const start = Math.max(0, step - jump_length);
	const end = Math.min(n - 1, step);

	for (let i = start; i <= end; i++) {
		if (breaks[i]) {
			return i;
		}
	}

	return -1;
}
