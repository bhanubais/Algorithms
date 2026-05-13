def bs_list(haystack: list[int], needle: int) -> bool:
    # Implement the binary search algorithm here.
    n = len(haystack)
    lo = 0
    hi = n
    mid: int
    value: int

    while lo < hi:
        mid = (lo + hi) // 2
        value = haystack[mid]

        if value == needle:
            return True
        if value < needle:
            lo = mid + 1
        else:
            hi = mid

    return False
