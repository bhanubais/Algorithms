import { describe, expect, it } from "bun:test";
import solve, { type Point } from "../index";
import cases from "./cases.json";

interface TestCase {
	maze: string[];
	wall: string;
	start: Point;
	end: Point;
	expected: Point[];
}

describe("Recursion: Maze Solver", () => {
	const testCases: TestCase[] = cases;

	for (let i = 0; i < testCases.length; i++) {
		const { maze, wall, start, end, expected } = testCases[i];
		it(`should solve maze case ${i + 1}`, () => {
			const result = solve(maze, wall, start, end);
			expect(result).toEqual(expected);
		});
	}
});
