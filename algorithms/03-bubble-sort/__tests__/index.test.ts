import { describe, expect, test } from "bun:test";
import { bubble_sort } from "../index";
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
describe("03-bubble-sort", () => {
	const testCases = cases as TestCase[];

	for (const c of testCases) {
		test(c.name, () => {
			// Because Bubble Sort is an IN-PLACE sort, we should copy the
			// array payload before sending it in to prevent reference poisoning.
			const arrCopy = [...c.arr];

			// Execute the algorithm
			bubble_sort(arrCopy);

			// Strictly assert the mutated array matches the expected array
			expect(arrCopy).toEqual(c.expected);
		});
	}
});
