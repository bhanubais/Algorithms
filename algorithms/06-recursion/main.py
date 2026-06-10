class Point:
    def __init__(self, x: int, y: int) -> None:
        self.x = x
        self.y = y

    def __add__(self, other):
        return Point(self.x + other.x, self.y + other.y)

    def __eq__(self, other) -> bool:
        return self.x == other.x and self.y == other.y


directions: list[Point] = [
    Point(0, -1),  # top
    Point(1, 0),  # right
    Point(0, 1),  # bottom
    Point(-1, 0),  # left
]


def walk(
    maze: list[str],
    wall: str,
    curr: Point,
    target: Point,
    seen: list[list[bool]],
    path: list[Point],
) -> bool:
    maze_w = len(maze[0])
    maze_h = len(maze)
    # BASE Cases (check position for current point)

    # 1. at outside the maze
    if curr.x < 0 or curr.x >= maze_w or curr.y < 0 or curr.y >= maze_h:
        return False

    # 2. at the wall
    if maze[curr.y][curr.x] == wall:
        return False

    # 3. already visited
    if seen[curr.y][curr.x]:
        return False

    # 4. at the target Point
    if curr == target:
        path.append(curr)
        return True

    # RECURSION Case
    # Pre: add current point into path and seen
    path.append(curr)
    seen[curr.y][curr.x] = True

    # Recursion
    # check in all directions
    for d in directions:
        new_curr: Point = curr + d
        if walk(maze, wall, new_curr, target, seen, path):
            return True

    # Post
    path.pop()

    return False


def solve(maze: list[str], wall: str, start: Point, end: Point) -> list[Point]:
    # placeholder to record path
    path: list[Point] = []

    # Prepare empty `seen` matrix
    seen: list[list[bool]] = [[False for __ in range(len(maze[0]))] for _ in range(len(maze))]

    # initiate walk
    walk(maze, wall, start, end, seen, path)

    return path
