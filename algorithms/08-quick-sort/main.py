def partition(arr: list[int], start: int, end: int) -> int:
    if start + 1 > end:
        return -1

    left = start + 1
    pivot = start

    for i in range(start + 1, end):
        if arr[i] <= arr[pivot]:
            (arr[i], arr[left]) = (arr[left], arr[i])
            left += 1

    (arr[pivot], arr[left - 1]) = (arr[left - 1], arr[pivot])
    pivot = left - 1

    return pivot


def q_sort(arr: list[int], start: int, end: int) -> None:
    if start < end:
        pivot = partition(arr, start, end)
        q_sort(arr, start, pivot)
        q_sort(arr, pivot + 1, end)


def quick_sort(arr: list[int]) -> None:
    # Engineer core recursive pivot logic here.
    q_sort(arr, 0, len(arr))
