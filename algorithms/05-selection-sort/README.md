# Selection Sort

Selection Sort is a foundational, in-place comparison sorting algorithm. It divides the input list into two parts: a sorted sublist built up from left to right at the front (left) of the list and a sublist of the remaining unsorted items that occupy the rest of the list.

## Core Mechanism

The algorithm proceeds by finding the minimum (or maximum) element from the unsorted sublist, swapping it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.

Imagine you have a hand of cards. You look through all the cards, find the smallest one, and place it at the very beginning. Then, you look through the remaining cards, find the next smallest, and place it in the second position. You repeat this exhaustive search until every card is sorted.

### Execution Steps
1. Set the current position `i` to 0.
2. Find the index of the minimum element in the array from `i` to the end.
3. If this minimum element is not at index `i`, swap them.
4. Increment `i` and repeat step 2 until the array is fully sorted.

## Complexities

*   **Time Complexity:** $`O(n^2)`$
    *   **Best, Average, and Worst Case:** The algorithm always scans the entire unsorted portion of the array to find the minimum, resulting in roughly $`n + (n-1) + (n-2) + ... + 1`$ comparisons, which simplifies mathematically to $`O(n^2)`$. It is completely agnostic to the initial order of the data.
*   **Space Complexity:** $`O(1)`$
    *   Selection Sort operates strictly in-place, requiring only a constant amount of extra memory for the swap variables, regardless of the input size.

## Takeaway
While extremely simple to understand and implement, Selection Sort is highly inefficient on large lists. However, it distinguishes itself by making the absolute minimum number of swaps ($`O(n)`$ swaps in the worst case), which can be useful in scenarios where write operations to memory are significantly more expensive than read operations.
