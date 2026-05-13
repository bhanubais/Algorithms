import math


def two_crystal_balls(breaks: list[bool]) -> int:
    # Implement the O(sqrt(n)) jump search algorithm
    # Return the index of the first `True`, or -1 if none exists.

    n = len(breaks)
    jump_len: int = math.floor(math.sqrt(n))
    step = 0

    # First the first jump point where the first ball breaks
    while step < n:
        if breaks[step]:
            break
        step += jump_len

    # iterate from previous jump to searched first breaking point.
    # We must ensure `start` doesn't fall into negative indexing (which Python wraps backwards)
    # and `end` doesn't exceed the array length.
    start = max(0, step - jump_len)
    end = min(n, step + 1)

    for i in range(start, end):
        if breaks[i]:
            return i

    return -1
