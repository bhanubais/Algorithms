public class QuickSort {
    private static int partition(int[] arr, int start, int end) {
        int pivot = start;
        int L = start + 1;
        int exchange;
        for (int i = start + 1; i < end; i++) {
            if (arr[i] < arr[pivot]) {
                // swap [i] with [L] and L ->
                exchange = arr[i];
                arr[i] = arr[L];
                arr[L] = exchange;
                L++;
            }
        }

        // swap [pivot] with [L-1] and pivot -> L-1
        exchange = arr[L - 1];
        arr[L - 1] = arr[pivot];
        arr[pivot] = exchange;
        pivot = L - 1;

        return pivot;
    }

    private static void qSort(int[] arr, int start, int end) {
        if (start < end) {
            int pivot = partition(arr, start, end);
            qSort(arr, start, pivot);
            qSort(arr, pivot + 1, end);
        }
        return;
    }

    public static void quickSort(int[] arr) {
        // Engineer core recursive pivot logic here.
        qSort(arr, 0, arr.length);
    }
}
