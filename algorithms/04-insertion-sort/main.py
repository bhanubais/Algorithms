def insertion_sort(arr: list[int]) -> None:
    n = len(arr)
    if n < 2:
        return

    for i in range(1, n):
        pick = arr[i]
        j = i - 1

        # shift element towards right one element at a time
        while j >= 0 and pick < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1

        # place picked number at correct position
        arr[j + 1] = pick


# Test
arr = [4, 2, 7, 4, 1, 9, 3]
insertion_sort(arr)
print(arr)
