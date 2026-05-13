import { describe, expect, test } from "bun:test";
import { two_crystal_balls } from "../index";
import cases from "./cases.json";

// Define the expected structure of our test vectors
interface TestCase {
	name: string;
	breaks: boolean[];
	expected: number;
}

// ============================================================================
// TEST EXECUTION
// ============================================================================
describe("01-two-crystal-balls", () => {
	const testCases = cases as TestCase[];

	for (const c of testCases) {
		test(c.name, () => {
			// Execute the algorithm and strictly assert the result
			const result = two_crystal_balls(c.breaks);
			expect(result).toBe(c.expected);
		});
	}
});
