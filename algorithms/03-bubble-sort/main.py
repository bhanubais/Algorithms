def bubble_sort(arr: list[int]) -> None:
    # Implement the O(n^2) bubble sort algorithm.
    # Sort the array in-place. Do not return a new array.
    n = len(arr)
    swapped: bool

    # iterate i -> [n-1 to 0]
    for i in range(n - 1, -1, -1):
        swapped = False
        # iterate j -> [0 to i)
        for j in range(i):
            # print(arr[j], arr[j + 1], " -> ", arr)
            # swap if require
            if arr[j + 1] < arr[j]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True

        # already sorted
        if not swapped:
            break


# Test
arr = [4, 2, 7, 4, 1, 9, 3]
bubble_sort(arr)
print(arr)
