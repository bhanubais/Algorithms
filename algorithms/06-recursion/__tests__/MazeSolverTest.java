import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.DynamicTest.dynamicTest;

import java.io.InputStreamReader;
import java.io.Reader;
import java.lang.reflect.Type;
import java.util.List;
import java.util.stream.Stream;

import org.junit.jupiter.api.DynamicTest;
import org.junit.jupiter.api.TestFactory;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

public class MazeSolverTest {

    private static class TestCase {
        String name;
        String[] maze;
        char wall;
        MazeSolver.Point start;
        MazeSolver.Point end;
        List<MazeSolver.Point> expected;
    }

    @TestFactory
    Stream<DynamicTest> generateTestsFromJson() {
        Gson gson = new Gson();
        Reader reader = new InputStreamReader(getClass().getResourceAsStream("/cases.json"));

        assertNotNull(reader, "Execution halted. Failed to locate cases.json in the classpath.");

        Type listType = new TypeToken<List<TestCase>>() {}.getType();
        List<TestCase> cases = gson.fromJson(reader, listType);

        return cases.stream()
                .map(testCase -> dynamicTest(testCase.name, () -> {
                    List<MazeSolver.Point> result =
                            MazeSolver.solve(testCase.maze, testCase.wall, testCase.start, testCase.end);
                    assertEquals(testCase.expected, result);
                }));
    }
}
