export default function selection_sort(arr: number[]): void {
	// TODO: Implement the algorithm here.
	const n = arr.length;
	let min_key: number;

	// iterate i -> [0 to n-1) to update ith element
	for (let i = 0; i < n - 1; i++) {
		min_key = i;
		// iterate j -> [i+1 to n) to find smallest element
		for (let j = i + 1; j < n; j++) {
			if (arr[j] < arr[min_key]) {
				min_key = j;
			}
		}
		// swap ith element with the smallest element
		[arr[min_key], arr[i]] = [arr[i], arr[min_key]];
	}
}
