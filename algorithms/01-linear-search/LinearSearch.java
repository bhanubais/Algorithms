public class LinearSearch {

    public static int linearSearch(int[] arr, int target) {
        // Implement core logic here.
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                return i;
            }
        }
        // Returning -1 to satisfy the compiler prior to your execution.
        return -1;
    }

}
