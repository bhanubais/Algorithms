export function bubble_sort(arr: number[]): void {
	const n = arr.length;
	let is_swapped: boolean;

	for (let i = n; i >= 0; i--) {
		is_swapped = false;
		for (let j = 0; j < i - 1; j++) {
			// swap jth and (j+1)th if jth value is greater than (j+1)th value
			if (arr[j + 1] < arr[j]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				is_swapped = true;
			}
		}

		// already sorted
		if (!is_swapped) {
			break;
		}
	}
}

const arr = [4, 2, 7, 4, 1, 9, 3];
bubble_sort(arr);
console.log(arr);
