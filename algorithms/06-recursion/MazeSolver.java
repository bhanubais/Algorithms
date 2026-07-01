import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class MazeSolver {

    public static class Point {
        public int x;
        public int y;

        public Point() {}

        public Point(int x, int y) {
            this.x = x;
            this.y = y;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            Point point = (Point) o;
            return this.x == point.x && this.y == point.y;
        }

        @Override
        public int hashCode() {
            return Objects.hash(x, y);
        }

        @Override
        public String toString() {
            return "{x=" + x + ", y=" + y + "}";
        }

        public Point add(Point other) {
            return new Point(this.x + other.x, this.y + other.y);
        }
    }

    public static List<Point> solve(String[] maze, char wall, Point start, Point end) {
        // Implement core recursive logic here.
        // placeholder to record path: the dynamic array
        List<Point> path = new ArrayList<>();

        // Prepare empty 'seen' matrix
        // Allocate the matrix. The entire grid is instantly false.
        int height = maze.length;
        int width = maze[0].length();
        boolean[][] seen = new boolean[height][width];

        walk(maze, wall, start, end, seen, path);

        return path;
    }

    private static final Point[] DIRECTIONS = {
        new Point(0, -1), // top
        new Point(1, 0), // right
        new Point(0, 1), // bottom
        new Point(-1, 0), // left
    };

    public static boolean walk(String[] maze, char wall, Point curr, Point end, boolean[][] seen, List<Point> path) {
        int maze_w = maze[0].length();
        int maze_h = maze.length;

        // BASE CASES:
        // 1. Point is outside the maze
        if (curr.x < 0 || maze_w <= curr.x || curr.y < 0 || maze_h <= curr.y) {
            return false;
        }

        // 2. Point is on the wall
        if (maze[curr.y].charAt(curr.x) == wall) {
            return false;
        }

        // 3. Already visited
        if (seen[curr.y][curr.x]) {
            return false;
        }

        // 4. Found the end Point
        if (curr.equals(end)) {
            path.add(curr);
            return true;
        }

        // RECURSIVE PART
        // Pre: Add point to the path List and label it seen
        path.add(curr);
        seen[curr.y][curr.x] = true;

        // Recursion: Check in all 4 directions
        for (Point d : DIRECTIONS) {
            Point newCurr = curr.add(d);

            if (walk(maze, wall, newCurr, end, seen, path)) {
                return true;
            }
        }

        // Post: Remove it from path
        path.remove(path.size() - 1);

        return false;
    }
}
