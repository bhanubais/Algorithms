function merge(arr: number[], p: number, q: number, r: number): void {
	/**
	 * merge array in place from [p:q) to [q:r)
	 */
	// create temporary arrays
	const L = arr.slice(p, q);
	const R = arr.slice(q, r);
	const n_l = q - p;
	const n_r = r - q;

	let k = p; // to track original array
	let i = 0; // to track left array
	let j = 0; // to track right array

	// compare both parts and merge them in the original array
	while (i < n_l && j < n_r) {
		if (R[j] < L[i]) {
			arr[k] = R[j];
			j++;
		} else {
			arr[k] = L[i];
			i++;
		}
		k++;
	}

	// replace original array with leftover elements from left part
	while (i < n_l) {
		arr[k] = L[i];
		i++;
		k++;
	}

	// replace original array with leftover elements from right part
	while (j < n_r) {
		arr[k] = R[j];
		j++;
		k++;
	}
}

function m_sort(arr: number[], p: number, q: number): void {
	/**
	 * merge sort given array in-place from [p:q)
	 */
	// base case
	if (q - p <= 1) {
		return;
	}

	// recursion
	const mid = p + Math.floor((q - p) / 2);
	// sort left and right part in-place
	m_sort(arr, p, mid);
	m_sort(arr, mid, q);

	// merge both parts
	merge(arr, p, mid, q);
}

export default function merge_sort(arr: number[]): void {
	// Implement core mutation logic here.
	m_sort(arr, 0, arr.length);
}
