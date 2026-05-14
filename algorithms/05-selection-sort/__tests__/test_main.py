import copy
import importlib.util
import json
from pathlib import Path
from typing import Any

import pytest

# =============================================================================
# MODULE LOADING
# =============================================================================
module_path = Path(__file__).parent.parent / "main.py"
spec = importlib.util.spec_from_file_location("main_module", module_path)
assert spec is not None, "Failed to load module spec"
assert spec.loader is not None, "Module spec has no loader"

main_module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(main_module)

# =============================================================================
# TEST VECTORS
# =============================================================================
cases_path = Path(__file__).parent / "cases.json"
cases: list[dict[str, Any]] = json.loads(cases_path.read_text())


# =============================================================================
# TEST EXECUTION
# =============================================================================
@pytest.mark.parametrize("case", cases, ids=[c["name"] for c in cases])
def test_algorithm(case: dict[str, Any]) -> None:
    """Executes the test vector against the Python implementation."""
    # Deep clone to avoid mutating the shared test dictionary state
    input_arr = copy.deepcopy(case["arr"])

    # Run the in-place sorting algorithm
    main_module.selection_sort(input_arr)

    # Assert correctness
    assert input_arr == case["expected"]
