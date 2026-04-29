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

## The two crystal ball problem

**Problem Statement:**
Given two crystal balls that will break if dropped from high enough distance, determine the exact spot in which it will break in the most optimized way.

Note: In this problem, it is assumed that there will be a maximum height given from where the ball will be break certainly.

**Convert the problem in Mathematics:**
we can consider this maximum heigth as `n`. Now the problem became like searching first breaking point in an array as below:
`[0, 0, ..., 0, 1, 1, ... 1, 1]`. Here 0 means not break, 1 means break.

### Solution 1: Linear Search

The correct naive solution is to iterate the array from beginning to the first hit (i.e. `1`). The worst time is `O(n)`.

### Solution 2: Binary Search

Searching for `1` using binary method will need `log(n)` tests and we only have two balls. i.e. we only have two chances to find the first breaking point. So, this method will not work here. **Can we think something different?**

### Solution 3: Sqrt(n) jumps

We can jump `sqrt(n)` distance from the beginning until the first ball breaks. At this point, we are certain that the first breaking point must be between previous jump and the current jump.

First, jump by square root of n increments until a break is detected, then jump back one increment and linearly search forward to find the exact breaking point.

```pre
[0, 0, ..., 0, 1, 1, ... 1, 1]
      ↑      ↑      ↑...
             └──────┘
```

**Time complexity:** `sqrt(n)` -> number of jumps + `sqrt(n)` -> search linearly. That is `O(sqrt(n))`.

1. `code .\src\day1\TwoCrystalBalls.ts`
2. Implement the code
3. test using `bunx jest TwoCrystalBalls`


### Proposed solution: cube root of n jumps insread of sqrt(n) jumps

The question is cube root of n is less than square root of n, so whether Is it not worthful to use cube root? and why stops here we can even user n^(1/4), or n^(1/5) and so on?

Let's analyze time complexity when using cube root.
total jumps = n / cube_root(n), linear iteration = cube_root(n)

Before make the mind let's compare `n / sqrt(n)` with `n / cube_root(n)`. What do you think is bigger number?
`cube_root(n)` < `sqrt(n)` => `n / cube_root(n)` > `n / sqrt(n)`

So, linear iteration may be reduced but number of jumps will be increase.

Hence Algorithm with `sqrt(n)` is better than `cube_root(n)`.

