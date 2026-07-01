import java.util.Arrays;

public class MergeSort {

    private static void merge(int[] arr, int p, int q, int r) {
        // Make a temporary copy of the array for Left and Right part
        int[] Left = Arrays.copyOfRange(arr, p, q);
        int[] Right = Arrays.copyOfRange(arr, q, r);
        int n_l = q - p, n_r = r - q;

        // i for Left, j for Right and k for original array
        int i = 0, j = 0, k = p;

        // compare both parts
        while (i < n_l && j < n_r) {
            if (Right[j] < Left[i]) {
                arr[k] = Right[j];
                j++;
            } else {
                arr[k] = Left[i];
                i++;
            }
            k++;
        }

        // replace original with leftover left part
        while (i < n_l) {
            arr[k] = Left[i];
            i++;
            k++;
        }

        // replace original with leftover right part
        while (j < n_r) {
            arr[k] = Right[j];
            j++;
            k++;
        }
    }

    private static void m_sort(int[] arr, int p, int q) {
        // Base Case
        if (q - p <= 1) {
            return;
        }
        int mid = p + (q - p) / 2;

        // sort left and right part in-place
        m_sort(arr, p, mid);
        m_sort(arr, mid, q);

        // merge sorted part in-place
        merge(arr, p, mid, q);
    }

    public static void mergeSort(int[] arr) {
        m_sort(arr, 0, arr.length);
    }

    public static void main(String[] args) {
        // Test locally
        int[] alist = {99, 1, 3, 5, 2, 4, 6, 88};
        mergeSort(alist);
        System.out.println(Arrays.toString(alist));
    }
}
