# Algorithmic Dual-Language Environment

High-speed, dual-language algorithmic testing architecture optimized for rigorous mathematical bounds and microsecond execution speeds.

## Workflow & Guidelines

1. **Algorithm Ingestion**: Raw theory goes into the algorithm's local `README.md`.
2. **Implementation**:
   - Write TypeScript in `index.ts`.
   - Write Python in `main.py`.
3. **Rigorous Testing**:
   - Define massive inputs and boundary conditions in `cases.json`.
   - Both languages consume the *exact same* validation sets to guarantee mathematical parity.

## Manual Directory Structure

We enforce strict **Namespace Isolation**. All domains exist at the root level to prevent testing bleeds.

```text
algorithms/                 # Pure functions, mathematical theory
├── 01-linear-search/
│   ├── README.md           # Theory, Time/Space complexities
│   ├── index.ts            # TS Implementation
│   ├── main.py             # Python Implementation
│   └── __tests__/          # Isolated rig validation

data-structures/            # Memory layouts, object primitives
├── pure-theory/            # Pure markdown notes (e.g., arrays.md)
├── 01-min-heap/            # Dual-language implementations
│   └── ...

problems/                   # Applied/LeetCode problems (imports from algorithms/)
├── 01-first-and-last-pos/
│   └── ...
```

## Execution Protocols

- **Algorithm Test**: `bun test algorithms/01-linear-search` or `uv run pytest algorithms/01-linear-search`
- **Problem Range Test**: `bun test problems/01-first-and-last-pos`
- **God Mode (Test Everything)**: `bun test` or `uv run pytest .`

---

## Index

| ID | Domain | Architecture | Time Complexity | Space Complexity | Status |
|----|--------|--------------|-----------------|------------------|--------|
| 01 | Algorithms | [Linear Search](algorithms/01-linear-search/README.md) | $O(n)$ | $O(1)$ | 🟢 Completed |
