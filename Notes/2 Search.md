## Linear Search

iterate a given array for the value we are looking for if it is found, return true. If we couldn't found the value in entire array, return false.

```bash
bun generate
bun day
# srcday1
```

## LinearSearchList

1. open `kata-machine/src/day1/LinearSearchList.ts`
2. implement the code
3. test using `bunx jest Linear`

## BinarySearchList

1. `code .\src\day1\BinarySearchList.ts`
2. Implement the code
3. test using `bunx jest BinarySearchList`

### The two crystal ball problem

Given two crystal balls that will break if dropped from high enough distance, determine the exact spot in which it will break in the most optimized way.

Note: In this problem, it is assumed that there will be a maximum height given from where the ball will be break certainly.

**Solution:**
we can consider this maximum heigth as `n`. Now the problem became like searching first breaking point in a list as below:
`[0, 0, ..., 0, 1, 1, ... 1, 1]`. Here 0 means not break, 1 means break.

But If we start searching linearly we may find the breaking point in O(n).

**Can we do better?**
Let's search binary way, suppose in n/2^k the first ball break, we can say certainly that the breaking point is on the leftside and start searching linearly from the left side. The total time would be O(n - n(1 - 1/2^k)). After removing constants, it is again linear.

**What about jump by sqrt(n) then linearly search backward to find the exact breaking point?**

Jump `sqrt(n)` steps at a time until the first ball breaks, then step back to the last known safe point and linearly search forward, resulting in a `sqrt(n)` search.

Time complexity = O(sqrt(n))

Because second ball require a linear search after the first ball breaks.

