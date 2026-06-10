export default function bs_list(haystack: number[], needle: number): boolean {
	// TODO: Implement the binary search algorithm here.
	const n = haystack.length;

	let lo = 0,
		hi = n,
		md: number,
		md_value: number;

	while (lo < hi) {
		md = Math.floor((lo + hi) / 2);
		md_value = haystack[md];

		if (md_value === needle) {
			return true;
		} else if (md_value < needle) {
			lo = md + 1;
		} else {
			hi = md;
		}
	}
	return false;
}
