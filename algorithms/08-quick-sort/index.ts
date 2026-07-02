function partition(arr: number[], start: number, end: number): number {
	if (start + 1 >= end) {
		return start;
	}
	let pivot = start;
	let L = start + 1;

	for (let i = start + 1; i < end; i++) {
		if (arr[i] < arr[pivot]) {
			[arr[i], arr[L]] = [arr[L], arr[i]];
			L++;
		}
	}

	[arr[pivot], arr[L - 1]] = [arr[L - 1], arr[pivot]];
	pivot = L - 1;

	return pivot;
}

function q_sort(arr: number[], start: number, end: number): void {
	if (start < end) {
		const pivot = partition(arr, start, end);
		q_sort(arr, start, pivot);
		q_sort(arr, pivot + 1, end);
	}
}

export default function quick_sort(arr: number[]): void {
	// Engineer core recursive pivot logic here.
	q_sort(arr, 0, arr.length);
}
