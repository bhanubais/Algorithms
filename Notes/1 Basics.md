## Array Data Structure

They are fixed size, continiguous memory chunks
- That means you cannot grow it without reallocating.
- There is no "insertAt" or push or pop. Doesn't mean you can't write those though.

Arrays are contineous memory location with fixed width for each element conceptually.
Let's `A = [3]`
It means "There are 3 fixed width memory location for a predefiend data type"
`A[2]` means Address of A + 2 * data-size.

In the JavaScript we can create contiguous memory using `new ArrayBuffer(<size)`. Then we can create multiple views of the same memory addresses using `new Uint8Array(<memory address>)` (8 bit data size) or `new Uint16Array(<memory address>)` (16 bit data size).

```js
// Create a contigous memory in JavaScript
const a = new ArrayBuffer(6);
a
// ArrayBuffer(6) [ 0, 0, 0, 0, 0, 0 ]
a[0] = 45
a
// ArrayBuffer(6) [ 0, 0, 0, 0, 0, 0 ]
// Can't be change

// Create a view of the memory address we blocked above i.e. `a`.
// 8-bit data size
const a8 = new Uint8Array(a)
a8
// Uint8Array(6) [ 0, 0, 0, 0, 0, 0 ]
a8[0] = 45
a


// Create a view of the memory address we blocked above i.e. `a`.
// 16-bit data size
const a16 = new Uint16Array(a)
// Uint16Array(3) [ 45, 0, 0 ]
a16[2] = 6550 // assigning a big number
a
// ArrayBuffer(6) [ 45, 0, 0, 0, 150, 25 ]
// Notice: 4th and 5th address.
```

### Key take away

- The array created by `new BufferArray(6)` assigned a contineous 8*6 = 48 bit memory.
- `Uint8Array` allow us to interprest 8 bit size for each element in the array
- `Uint16Array` allow us to interprest 16 bit size for each element in the array. In another words, now we will move 16 bit at a time.
- That's why when we asigned a greater than 8 bit size value it expanded into two memory block (considering 8-bit size).

### Getting a value from the Array

a[<offset>] = location of a + <width of data type> * <offset>

example:
a8[2] = a + 8*2

It's constant to get any value from an Array.

### Deleting a value from the Array

There is nothing exactly like delete for an array. Instead we just set the value to `null` or `None` to mimic it's not available anymore. In another words, deletion is just updating the value.

delete a[3]: a[3] = null


## Understanding the concept

- `a` is just a contiguous memory space for 6 elements. By default it is 8-bit size, so behind the scene `a` is actually `[0b00000000, 0b00000000, 0b00000000, 0b00000000, 0b00000000, 0b00000000]`
- `a8` is the 8 bit view of the same memory space. so it is exactly similar to `a` as `[0b00000000, 0b00000000, 0b00000000, 0b00000000, 0b00000000, 0b00000000]`
- `a16` on the other hand reads the same memory space in 16bit as `[0b0000000000000000, 0b0000000000000000, 0b0000000000000000]`
- But there is a unique way how `a16` reads the contiguous memory. Instead of reading linearly, it reads/write in strange way. Suppose position of elements in `a = [1, 2, 3, 4, 5, 6]`. `a16` read/write is as `[21, 43, 65]`
- Better understand with examples below:

```js
const a = new ArrayBuffer(6)
// ArrayBuffer(6) [ 0, 0, 0, 0, 0, 0 ]

const a8 = new Uint8Array(a)
// Uint8Array(6) [ 0, 0, 0, 0, 0, 0 ]

const a16 = new Uint16Array(a)
// Uint16Array(3) [ 0, 0, 0 ]

```

Each of the element in the array `a8` is viewed as `a[1, 2, 3, 4, 5, 6]`. And in the `a16` same data is read/write as `a[21, 43, 65]`.

To prove it, Let's consider a 16-bit binary number `0b11110000_10100000`, that is equivalent to `61600`. If we split this binary number into two 8bit numbers we get `0b11110000` -> 240 and `0b10100000` -> 160.

Assign both numbers at 0th and 1st position but at interchanged positions. i.e. instead of a8[0] = 240, and a8[1] = 160 we assign it as a8[0] = 160, and a8[1] = 240

```js
a8[0] = 160
a8[1] = 240

// Let's see it in 8bit view
a8
// Uint8Array(6) [ 160, 240, 0, 0, 0, 0 ]

// Same data in 16 bit view
a16
// Uint16Array(3) [ 61600, 0, 0 ]
```

