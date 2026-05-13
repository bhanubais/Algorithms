export default function bs_list(haystack: number[], needle: number): boolean {
	// TODO: Implement the binary search algorithm here.
	const n = haystack.length;

	let lo = 0;
	let hi = n;
	let mid: number, value: number;

	while (lo < hi) {
		mid = Math.floor((lo + hi) / 2);
		value = haystack[mid];

		if (value === needle) {
			return true;
		} else if (value < needle) {
			lo = mid + 1;
		} else {
			hi = mid;
		}
	}
	return false;
}
