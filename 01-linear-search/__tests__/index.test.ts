import { describe, expect, test } from "bun:test";
import { linearSearch } from "../index";
import cases from "./cases.json";

// Define the expected structure of our test vectors
interface TestCase {
	name: string;
	arr: number[];
	target: number;
	expected: number;
}

// ============================================================================
// TEST EXECUTION
// ============================================================================
describe("01-linear-search", () => {
	// Cast the imported JSON to our strongly-typed interface
	const testCases = cases as TestCase[];

	for (const c of testCases) {
		test(c.name, () => {
			// Execute the algorithm and strictly assert the result
			const result = linearSearch(c.arr, c.target);
			expect(result).toBe(c.expected);
		});
	}
});
