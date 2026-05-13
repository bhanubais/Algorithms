export default function insertion_sort(arr: number[]): void {
	// TODO: Implement the insertion sort algorithm here (sort in-place).
	const n = arr.length;
	let key: number;

	// iterate i -> [1 to n)
	for (let i = 1; i < n; i++) {
		key = arr[i];

		// iterate j until correct position of the key
		let j = i - 1;
		while (0 <= j && key < arr[j]) {
			// shift element to right-side
			arr[j + 1] = arr[j];
			j--;
		}

		// place key element to it's correct position
		arr[j + 1] = key;
	}
}
