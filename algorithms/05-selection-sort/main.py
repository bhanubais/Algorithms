def selection_sort(arr: list[int]) -> None:
    for i in range(len(arr) - 1):
        # find the smallest element in the list
        mn = i
        for j in range(i, len(arr)):
            if arr[j] < arr[mn]:
                mn = j

        # and swap it
        arr[i], arr[mn] = arr[mn], arr[i]


# Test
arr = [4, 2, 7, 4, 1, 9, 3]
selection_sort(arr)
print(arr)
