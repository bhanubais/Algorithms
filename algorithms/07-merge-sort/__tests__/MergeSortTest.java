import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.junit.jupiter.api.DynamicTest;
import org.junit.jupiter.api.TestFactory;

import java.io.InputStreamReader;
import java.io.Reader;
import java.lang.reflect.Type;
import java.util.List;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.DynamicTest.dynamicTest;

public class MergeSortTest {

    private static class TestCase {
        String name;
        int[] arr;
        int[] expected;
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
                    MergeSort.mergeSort(testCase.arr);
                    assertArrayEquals(testCase.expected, testCase.arr);
                }));
    }
}
