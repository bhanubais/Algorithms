def bubble_sort(arr: list[int]) -> None:
    n = len(arr)
    is_swapped = False

    for i in range(n, -1, -1):
        is_swapped = False
        for j in range(i - 1):
            # swap if jth value is greater than (j+1)th value
            if arr[j + 1] < arr[j]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                is_swapped = True

        # already sorted
        if not is_swapped:
            break


# Test
arr = [4, 2, 7, 4, 1, 9, 3]
bubble_sort(arr)
print(arr)
