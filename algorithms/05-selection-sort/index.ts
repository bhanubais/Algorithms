export default function selection_sort(arr: number[]): void {
	const n = arr.length;
	let mn: number;

	for (let i = 0; i < n - 1; i++) {
		// find the smallest element in the list
		mn = i;
		for (let j = i; j < n; j++) {
			if (arr[j] < arr[mn]) {
				mn = j;
			}
		}
		// and swap it
		[arr[mn], arr[i]] = [arr[i], arr[mn]];
	}
}

// Test
const arr = [4, 2, 7, 4, 1, 9, 3];
selection_sort(arr);
console.log(arr);
