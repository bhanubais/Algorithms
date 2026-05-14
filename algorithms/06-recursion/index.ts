export type Point = {
	x: number;
	y: number;
};

const directions = [
	[0, -1], // top
	[1, 0], // right
	[0, 1], // bottom
	[-1, 0], // left
];

function walk(
	maze: string[],
	wall: string,
	cur: Point,
	end: Point,
	seen: boolean[][],
	path: Point[],
): boolean {
	const maze_w = maze[0].length;
	const maze_h = maze.length;

	// Base Case 1: Off the map
	if (cur.x < 0 || maze_w <= cur.x || cur.y < 0 || maze_h <= cur.y) {
		return false;
	}

	// Base Case 2: On the wall
	if (maze[cur.y][cur.x] === wall) {
		return false;
	}

	// Base Case 3: It's the end
	if (cur.x === end.x && cur.y === end.y) {
		path.push(cur);
		return true;
	}

	// Base Case 4: We already seen it
	if (seen[cur.y][cur.x]) {
		return false;
	}

	// Recursion
	// pre
	seen[cur.y][cur.x] = true;
	path.push(cur);

	// recurse in all possible directions
	for (let d = 0; d < directions.length; d++) {
		const [dx, dy] = directions[d];
		const new_cur = { x: cur.x + dx, y: cur.y + dy };
		if (walk(maze, wall, new_cur, end, seen, path)) {
			return true;
		}
	}

	// post
	path.pop();

	return false;
}

export default function solve(
	maze: string[],
	wall: string,
	start: Point,
	end: Point,
): Point[] {
	// TODO: Implement the algorithm here.
	const seen: boolean[][] = [];
	const path: Point[] = [];

	// Fill seen with false value
	for (let i = 0; i < maze.length; i++) {
		seen.push(new Array(maze[0].length).fill(false));
	}

	// initiate walk
	walk(maze, wall, start, end, seen, path);

	return path;
}
