export default function bubble_sort(arr: number[]): void {
	const n = arr.length;
	for (let i = n - 1; i >= 0; --i) {
		for (let j = 0; j < i; ++j) {
			// swap if require
			if (arr[j + 1] < arr[j]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}
}
