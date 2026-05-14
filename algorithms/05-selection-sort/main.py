def selection_sort(arr: list[int]) -> None:
    # Implement the algorithm here.
    n = len(arr)
    min_key: int

    # iterate i -> [0 to n-1) to update ith element
    for i in range(0, n - 1):
        min_key = i
        # iterate j -> [i+1 to n) to find smallest element
        for j in range(i + 1, n):
            if arr[j] < arr[min_key]:
                min_key = j
        # swap ith element with the smallest element
        arr[i], arr[min_key] = arr[min_key], arr[i]
