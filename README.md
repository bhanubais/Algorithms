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

To provision a new algorithm, instantiate this exact topology (kebab-case, numbered):

```text
01-algorithm-name/
├── README.md             # Theory, Time/Space complexities, formal proofs
├── index.ts              # TS Implementation
├── main.py               # Python Implementation
└── __tests__/
    ├── cases.json        # Shared rigorous test vectors (base + massive inputs)
    ├── index.test.ts     # Bun native test script
    └── test_main.py      # Pytest validation script
```

## Execution Protocols

- **TypeScript**: `bun test <algorithm-folder>`
- **Python**: `uv run pytest <algorithm-folder>`

---

## Index

| ID | Algorithm | Time Complexity | Space Complexity | Status |
|----|-----------|-----------------|------------------|--------|
| 01 | [Linear Search](01-linear-search/README.md) | $O(n)$ | $O(1)$ | 🟢 Completed |
