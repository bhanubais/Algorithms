import { describe, expect, test } from "bun:test";
import quick_sort from "../index";
import cases from "./cases.json";

interface TestCase {
	name: string;
	arr: number[];
	expected: number[];
}

describe("08-quick-sort", () => {
	const testCases = cases as TestCase[];

	for (const c of testCases) {
		test(c.name, () => {
			quick_sort(c.arr);
			expect(c.arr).toEqual(c.expected);
		});
	}
});
