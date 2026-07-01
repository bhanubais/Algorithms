import { describe, expect, test } from "bun:test";
import solve, { type Point } from "../index";
import cases from "./cases.json";

interface TestCase {
	name: string;
	maze: string[];
	wall: string;
	start: Point;
	end: Point;
	expected: Point[];
}

describe("06-recursion", () => {
	const testCases = cases as TestCase[];

	for (const c of testCases) {
		test(c.name, () => {
			const result = solve(c.maze, c.wall, c.start, c.end);
			expect(result).toEqual(c.expected);
		});
	}
});
