import java.util.Arrays;

public class BubbleSort {

    public static void bubbleSort(int[] arr) {
        // Implement core mutation logic here.
        int n = arr.length;
        int temp;

        for (int i = n - 1; i >= 0; i--) {
            for (int j = 0; j < i; j++) {
                if (arr[j] > arr[j + 1]) {
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    public static void main(String[] args) {
        // int[] alist = { 4, 2, 7, 4, 1, 9, 3 };
        int[] alist = { 5, 4, 3, 2, 1 };
        bubbleSort(alist);
        System.out.println(Arrays.toString(alist));
    }
}
