def insertion_sort(arr: list[int]) -> None:
    # Implement the insertion sort algorithm here (sort in-place).
    n = len(arr)

    # iterate i -> [1 to n)
    for i in range(1, n):
        key = arr[i]
        j = i - 1

        # iterate j until correct position of the key
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1

        # place key at it's correct position
        arr[j + 1] = key
