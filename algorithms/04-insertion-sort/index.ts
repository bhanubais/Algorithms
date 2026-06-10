export default function insertion_sort(arr: number[]): void {
	const n = arr.length;
	if (n < 2) return;
	let pick: number;

	for (let i = 1; i < n; i++) {
		pick = arr[i];
		let j = i - 1;

		// shift element towards right one element at a time
		while (0 <= j && pick < arr[j]) {
			arr[j + 1] = arr[j];
			j--;
		}

		// place picked number at correct position
		arr[j + 1] = pick;
	}
}

// Test
const arr = [4, 2, 7, 4, 1, 9, 3];
insertion_sort(arr);
console.log(arr);
