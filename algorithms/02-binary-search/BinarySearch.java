public class BinarySearch {

    public static boolean bsList(int[] haystack, int needle) {
        // Implement core logic here.
        int lw = 0;
        int hi = haystack.length - 1;
        int md;

        while (lw <= hi) {
            md = (lw + hi) / 2;
            if (haystack[md] == needle) {
                return true;
            } else if (haystack[md] < needle) {
                lw = md + 1;
            } else {
                hi = md - 1;
            }
        }
        return false;
    }

}
