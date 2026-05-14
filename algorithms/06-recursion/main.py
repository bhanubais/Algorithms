class Point:
    def __init__(self, x: int, y: int) -> None:
        self.x = x
        self.y = y

    def __add__(self, other):
        return Point(self.x + other.x, self.y + other.y)

    def __eq__(self, other) -> bool:
        return self.x == other.x and self.y == other.y


directions = [
    Point(0, -1),  # Top
    Point(1, 0),  # Right
    Point(0, 1),  # Bottom
    Point(-1, 0),  # Left
]


def walk(
    maze: list[str],
    wall: str,
    cur: Point,
    end: Point,
    seen: list[list[bool]],
    path: list[Point],
) -> bool:
    maze_w = len(maze[0])
    maze_h = len(maze)

    # Base Case 1: Off the map
    if cur.x < 0 or maze_w <= cur.x or cur.y < 0 or maze_h <= cur.y:
        return False

    # Base Case 2: On the wall
    if maze[cur.y][cur.x] == wall:
        return False

    # Base Case 3: It's the end
    if cur == end:
        path.append(cur)
        return True

    # Base Case 4: We already seen it
    if seen[cur.y][cur.x]:
        return False

    # Recurse
    # Pre
    seen[cur.y][cur.x] = True
    path.append(cur)

    # Recursion in all four directions
    for d in directions:
        new_cur: Point = cur + d
        if walk(maze, wall, new_cur, end, seen, path):
            return True

    # Post
    path.pop()

    return False


def solve(maze: list[str], wall: str, start: Point, end: Point) -> list[Point]:
    # Implement the algorithm here.
    seen: list[list[bool]] = [[False for __ in range(len(maze[0]))] for _ in range(len(maze))]
    path: list[Point] = []

    # initiate walk
    walk(maze, wall, start, end, seen, path)

    return path
