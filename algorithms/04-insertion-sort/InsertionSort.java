import java.util.Arrays;

public class InsertionSort {

    public static void insertionSort(int[] arr) {
        // Implement core mutation logic here.
        int n = arr.length;
        for (int i = 1; i < n; i++) {
            int pick = arr[i];
            int j = i;
            while (0 < j && pick < arr[j - 1]) {
                arr[j] = arr[j - 1];
                j--;
            }
            arr[j] = pick;
        }
    }

    public static void main(String[] args) {
        int[] alist = { 5, 4, 3, 2, 1 };
        insertionSort(alist);
        System.out.println(Arrays.toString(alist));
    }
}
