import { describe, expect, test } from "bun:test";
import merge_sort from "../index";
import cases from "./cases.json";

interface TestCase {
	name: string;
	arr: number[];
	expected: number[];
}

describe("07-merge-sort", () => {
	const testCases = cases as TestCase[];

	for (const c of testCases) {
		test(c.name, () => {
			merge_sort(c.arr);
			expect(c.arr).toEqual(c.expected);
		});
	}
});
