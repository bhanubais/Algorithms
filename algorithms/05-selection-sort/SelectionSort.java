import java.util.Arrays;

public class SelectionSort {

    public static void selectionSort(int[] arr) {
        // Implement core mutation logic here.
        int n = arr.length;
        int temp;
        for (int i = 0; i < n - 1; i++) {
            // search for minimum and swap with ith element
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[i]) {
                    // swap with ith element
                    temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                }
            }
        }
    }

    public static void main(String[] args) {
        int[] alist = { 5, 4, 3, 2, 1 };
        selectionSort(alist);
        System.out.println(Arrays.toString(alist));
    }
}
