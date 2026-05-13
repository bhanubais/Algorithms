export function bubble_sort(arr: number[]): void {
	// TODO: Implement the O(n^2) bubble sort algorithm.
	// Sort the array in-place. Do not return a new array.
	const n = arr.length;
	let swapped = false;

	// iterate i -> [n-1 to 0]
	for (let i = n - 1; i >= 0; i--) {
		swapped = false;
		// iterate j -> [0 to i)
		for (let j = 0; j < i; j++) {
			// swap if require
			if (arr[j + 1] < arr[j]) {
				[arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
				swapped = true;
			}
		}
		// already sorted
		if (!swapped) break;
	}
}
