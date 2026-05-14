import { describe, expect, test } from "bun:test";
import selection_sort from "../index";
import cases from "./cases.json";

// Define the expected structure of our test vectors
interface TestCase {
	name: string;
	arr: number[];
	expected: number[];
}

// ============================================================================
// TEST EXECUTION
// ============================================================================
describe("05-selection-sort", () => {
	// Cast the imported JSON to our strongly-typed interface
	const testCases = cases as TestCase[];

	for (const c of testCases) {
		test(c.name, () => {
			// Deep clone the input array so mutations don't affect shared refs
			const input = [...c.arr];

			// Execute the algorithm (in-place sort)
			selection_sort(input);

			// Assert that the array matches the expected sorted array
			expect(input).toEqual(c.expected);
		});
	}
});
