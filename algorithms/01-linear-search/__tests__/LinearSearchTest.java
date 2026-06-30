import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.junit.jupiter.api.DynamicTest;
import org.junit.jupiter.api.TestFactory;

import java.io.InputStreamReader;
import java.io.Reader;
import java.lang.reflect.Type;
import java.util.List;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.DynamicTest.dynamicTest;

public class LinearSearchTest {

    // Structure maps directly to your JSON schema
    private static class TestCase {
        String name;
        int[] arr;
        int target;
        int expected;
    }

    @TestFactory
    Stream<DynamicTest> generateTestsFromJson() {
        Gson gson = new Gson();

        // The script injects the __tests__ folder into the classpath.
        // We load the file directly from memory.
        Reader reader = new InputStreamReader(
                getClass().getResourceAsStream("/cases.json"));

        assertNotNull(reader, "Execution halted. Failed to locate cases.json in the classpath.");

        Type listType = new TypeToken<List<TestCase>>() {
        }.getType();
        List<TestCase> cases = gson.fromJson(reader, listType);

        // Map JSON nodes to actionable JUnit assertions
        return cases.stream().map(testCase -> dynamicTest(testCase.name, () -> {
            int result = LinearSearch.linearSearch(testCase.arr, testCase.target);
            assertEquals(testCase.expected, result);
        }));
    }
}
