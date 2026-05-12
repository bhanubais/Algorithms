import importlib.util
import json
from pathlib import Path
from typing import Any

import pytest

# =============================================================================
# MODULE LOADING
# Dynamically load `main.py` to bypass Python's kebab-case module restrictions.
# This prevents namespace clashes and ensures isolated execution.
# =============================================================================
module_path = Path(__file__).parent.parent / "main.py"
spec = importlib.util.spec_from_file_location("main_module", module_path)
assert spec is not None, "Failed to load module spec"
assert spec.loader is not None, "Module spec has no loader"

main_module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(main_module)

# =============================================================================
# TEST VECTORS
# Load shared JSON test cases to ensure parity across languages.
# =============================================================================
cases_path = Path(__file__).parent / "cases.json"
cases: list[dict[str, Any]] = json.loads(cases_path.read_text())


# =============================================================================
# TEST EXECUTION
# =============================================================================
@pytest.mark.parametrize("case", cases, ids=[c["name"] for c in cases])
def test_algorithm(case: dict[str, Any]) -> None:
    """Executes the test vector against the Python implementation."""
    result = main_module.linear_search(case["arr"], case["target"])
    assert result == case["expected"]
