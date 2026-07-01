# Tri-Language Algorithmic Testing Infrastructure

High-performance algorithmic testing architecture. Engineered for strict mathematical analysis and microsecond execution across TypeScript, Python, and Java.

## Workflow & Governance

1. **Algorithm Ingestion**: Document mathematical theory and resource complexities in the local `README.md`.
2. **Implementation Architecture**:
    * Write TypeScript in `index.ts`.
    * Write Python in `main.py`.
    * Write Java in `[AlgorithmName].java`.
3. **Validation Protocol**:
    * Engineer comprehensive boundary conditions in `cases.json`.
    * All three runtime environments consume the exact same validation sets. This enforces strict parity.

## Directory Structure

We enforce rigid namespace isolation. All domains exist at the root level to prevent testing logic from bleeding across environments.

```text
algorithms/                 # Pure functions, mathematical theory
├── 01-linear-search/
│   ├── README.md           # Theory, Time/Space complexities
│   ├── index.ts            # TS Implementation
│   ├── main.py             # Python Implementation
│   ├── LinearSearch.java   # Java Implementation
│   └── __tests__/          # Isolated test harnesses and cases.json

data-structures/            # Memory layouts, object primitives
├── pure-theory/            # Markdown documentation (e.g., arrays.md)
├── 01-min-heap/            # Tri-language implementations
│   └── ...

problems/                   # Applied problems referencing core algorithms
├── 01-first-and-last-pos/
│   └── ...

```

## Execution Protocols

Audit your algorithms across the tri-language infrastructure. Execute these commands from the root directory to validate logic.

### 1. Isolated Module Execution

Target a specific algorithm or problem directory. Replace the trailing path with your active module.

* **TypeScript:** `bun test .\algorithms\01-linear-search\`
* **Python:** `uv run pytest .\algorithms\01-linear-search\`
* **Java:** `.\test-java.ps1 .\algorithms\01-linear-search\`

### 2. Global Execution

Validate the entire codebase architecture simultaneously.

* **TypeScript:** `bun test`
* **Python:** `uv run pytest .`
* **Java:** Global execution pipeline requires module-specific targeting. Audit individual modules using the isolated script above.

---

## Index

Our index is partitioned strictly by domain. Pure theory dictates the concept. Implementations dictate the exact Big-O bounding.

### 📚 Pure Theory & Concepts

Fundamental memory layouts, primitives, and computer science concepts.

| Topic | Subject | Reference |
| --- | --- | --- |
| Arrays | Contiguous Memory Layout & Endianness | [01_arrays.md](data-structures/pure-theory/01_arrays.md) |

### 🏗️ Data Structures (Implementations)

Tri-language implementations of memory structures.

| ID | Data Structure | Time Complexity (Search) | Space Complexity | Status |
| --- | --- | --- | --- | --- |
| - | - | - | - | - |

### ⚡ Algorithms

Pure mathematical algorithms operating on structures.

| ID | Algorithm | Time Complexity | Space Complexity | Status |
| --- | --- | --- | --- | --- |
| 01 | [Linear Search](algorithms/01-linear-search/README.md) | $O(n)$ | $O(1)$ | 🟢 Completed |
| 02 | [Binary Search](algorithms/02-binary-search/README.md) | $O(\log{n})$ | $O(1)$ | 🟢 Completed |
| 03 | [Bubble Sort](algorithms/03-bubble-sort/README.md) | $O(n^2)$ | $O(1)$ | 🟢 Completed |
| 04 | [Insertion Sort](algorithms/04-insertion-sort/README.md) | $O(n^2)$ | $O(1)$ | 🟢 Completed |
| 05 | [Selection Sort](algorithms/05-selection-sort/README.md) | $O(n^2)$ | $O(1)$ | 🟢 Completed |
| 06 | [Recursion (Maze Solver)](algorithms/06-recursion/README.md) | $O(V)$ | $O(V)$ | 🟢 Completed |
| 07 | [Merge Sort](algorithms/07-merge-sort/README.md) | $O(n \log{n})$ | $O(n)$ | 🟢 Completed |
| 08 | [Quick Sort](algorithms/08-quick-sort/README.md) | $O(n \log{n})$ | $O(1)$ | 🟠 PENDING |

### 🧩 Applied Problems

Real-world applications mapped directly to core algorithms.

| ID | Problem | Underpinning Architecture | Status |
| --- | --- | --- | --- |
| 01 | [Two Crystal Balls](problems/01-two-crystal-balls/README.md) | $O(\sqrt{n})$ Jump Search | 🟢 Completed |
