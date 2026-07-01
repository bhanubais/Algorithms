def merge(arr: list[int], p: int, q: int, r: int) -> None:
    """
    Merge the array in place from [p:q) to [q:r)
    """
    # Temporary store both parts in two distinct arrays
    L = arr[p:q]
    R = arr[q:r]
    n_l = q - p
    n_r = r - q

    k = p  # to fill the original list
    i = 0  # to iterate/track Left list
    j = 0  # to iterate/track Right List

    # compare both parts and merge them in the original array
    while i < n_l and j < n_r:
        if R[j] < L[i]:
            arr[k] = R[j]
            j += 1
        else:
            arr[k] = L[i]
            i += 1
        k += 1

    # replace original array with leftover elements from L
    while i < n_l:
        arr[k] = L[i]
        k += 1
        i += 1

    # replace original array with leftover elements from R
    while j < n_r:
        arr[k] = R[j]
        k += 1
        j += 1


def m_sort(arr: list[int], p: int, q: int) -> None:
    """
    merge sort given array from [p:q)
    """
    if q - p <= 1:
        return
    mid = p + (q - p) // 2

    # sort left and right part
    m_sort(arr, p, mid)
    m_sort(arr, mid, q)

    # merge left and right part inplace
    merge(arr, p, mid, q)


def merge_sort(arr: list[int]) -> None:
    # Implement core mutation logic here.
    m_sort(arr, 0, len(arr))
