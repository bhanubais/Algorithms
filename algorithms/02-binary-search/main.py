def bs_list(haystack: list[int], needle: int) -> bool:
    # Implement the binary search algorithm here.
    n = len(haystack)
    lo = 0
    hi = n
    md: int
    md_value: int

    while lo < hi:
        md = (lo + hi) // 2
        md_value = haystack[md]

        if md_value == needle:
            return True
        if md_value < needle:
            lo = md + 1
        else:
            hi = md

    return False
