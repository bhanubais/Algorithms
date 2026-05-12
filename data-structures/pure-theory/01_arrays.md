# Arrays (Contiguous Memory Layout)

An array is the fundamental low-level data structure for storing collections of items.

## Characteristics of a Pure Array
- **Fixed size:** Memory is allocated once at creation. It cannot grow without reallocating an entirely new block of memory and copying the elements over.
- **Contiguous memory:** Every element sits immediately next to the previous one in physical RAM.
- **Fixed-width elements:** Every slot in the array consumes the exact same number of bytes.
- **No native operations:** There is no native `insertAt`, `push`, or `pop`. These are higher-level functions (dynamic arrays/lists) built *on top* of pure arrays.

When we declare `A = new Array(n)`, we ask the OS to reserve $n \times \text{width in bytes}$ contiguous memory blocks. The variable `A` merely holds the memory address of the **first** element.

## Mathematical Pointer Arithmetic ($O(1)$ Access)
Because elements are fixed-width and contiguous, accessing an element at a specific index does not require linear traversal. The CPU calculates the exact physical address in $O(1)$ time using pointer arithmetic:

$$ \text{Address}(A[i]) = \text{Address}(A[0]) + (i \times \text{element width in bytes}) $$

## Low-Level Memory Demonstration (Typed Arrays in JS/TS)

In high-level languages like Python or standard JavaScript (`[]`), dynamic arrays hide memory mechanics. To see pure contiguous arrays, we use `ArrayBuffer` and view it through structurally strict lenses (TypedArrays).

```javascript
// Ask the OS for 6 contiguous bytes of raw memory.
const buffer = new ArrayBuffer(6);
// [ 00000000, 00000000, 00000000, 00000000, 00000000, 00000000 ]

// Create an 8-bit (1 byte) view. This gives us 6 slots (6 / 1 = 6).
const a8 = new Uint8Array(buffer);

// Create a 16-bit (2 byte) view. This gives us 3 slots (6 / 2 = 3).
const a16 = new Uint16Array(buffer);

a8[0] = 45;
// a8:  [ 45, 0, 0, 0, 0, 0 ]
// a16: [ 45, 0, 0 ]

// Assign a value that is larger than 1 byte (6550 needs 16 bits)
a16[1] = 6550;
// a16: [ 45, 6550, 0 ]

// Because a16 and a8 point to the SAME physical memory, writing a 16-bit integer
// overwrites TWO 8-bit blocks!
console.log(a8);
// Uint8Array(6) [ 45, 0, 150, 25, 0, 0 ]
```

### Endianness (The "Reverse Order" Mystery)
Why did `6550` turn into `150` and `25` inside the 8-bit view?

This exposes **Little-Endian Architecture**, which is how modern x86/ARM CPUs store multi-byte numbers in RAM. In Little-Endian format, the *least significant byte* (LSB) is stored at the lowest memory address.

1. `6550` in 16-bit binary is `00011001 10010110`.
   - The first byte (Most Significant) is `00011001` (Decimal: 25).
   - The second byte (Least Significant) is `10010110` (Decimal: 150).
2. The CPU stores the LSB (`150`) in the first available slot, and the MSB (`25`) in the next.
3. Therefore: `a8[2] = 150` and `a8[3] = 25`.

To prove this manually:
```javascript
a8[0] = 160;        # LSB
a8[1] = 240;        # MSB
// a16 reading index 0 will merge them backwards: (240 << 8) | 160
console.log(a16[0]); // Output: 61600
```

## Deletion and Logical "Nulling" ($`O(1)`$)
Because the array size is physically fixed in RAM, you cannot literally "delete" an element to shrink the array. "Deleting" an element simply means overwriting its fixed memory block with a tombstone value (like `0`, `-1`, or `null`).

$$ A[3] = \text{null} $$

The physical memory footprint of the array remains unchanged.

