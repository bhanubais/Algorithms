export type Point = {
	x: number;
	y: number;
};

const _directions = [
	{ x: 0, y: -1 } as Point, // top
	{ x: 1, y: 0 } as Point, // right
	{ x: 0, y: 1 } as Point, // bottom
	{ x: -1, y: 0 } as Point, // left
];

function walk(
	maze: string[],
	wall: string,
	curr: Point,
	target: Point,
	path: Point[],
	seen: boolean[][],
): boolean {
	const maze_w = maze[0].length;
	const maze_h = maze.length;

	// BASE Cases: position of current point
	// 1. Outside the maze
	if (curr.x < 0 || maze_w <= curr.x || curr.y < 0 || maze_h <= curr.y)
		return false;

	// 2. at the wall
	if (maze[curr.y][curr.x] === wall) return false;

	// 3. Already seen
	if (seen[curr.y][curr.x]) return false;

	// 4. at the target
	if (curr.x === target.x && curr.y === target.y) {
		path.push(curr);
		return true;
	}

	// RECURSIVE Case
	// PRE: add current point in path and seen
	path.push(curr);
	seen[curr.y][curr.x] = true;

	// Recursive Step
	// Look for each direction
	for (const d of _directions) {
		const new_curr: Point = { x: curr.x + d.x, y: curr.y + d.y } as Point;
		if (walk(maze, wall, new_curr, target, path, seen)) {
			return true;
		}
	}

	// POST
	path.pop();

	return false;
}

export default function solve(
	maze: string[],
	wall: string,
	start: Point,
	end: Point,
): Point[] {
	// placeholder for paths
	const path: Point[] = [];

	// create seen matrix
	const seen: boolean[][] = [];
	for (let i = 0; i < maze.length; i++) {
		seen.push(new Array(maze[0].length).fill(false));
	}

	// Initiate path
	walk(maze, wall, start, end, path, seen);

	return path;
}
