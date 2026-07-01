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
    start = main_module.Point(case["start"]["x"], case["start"]["y"])
    end = main_module.Point(case["end"]["x"], case["end"]["y"])
    expected = case["expected"]

    result = main_module.solve(case["maze"], case["wall"], start, end)

    # Standardize result structure for strict equality checks
    result_dicts = []
    if result:
        if isinstance(result[0], dict):
            result_dicts = result
        else:
            result_dicts = [
                {
                    "x": getattr(p, "x", p[0] if isinstance(p, tuple) else None),
                    "y": getattr(p, "y", p[1] if isinstance(p, tuple) else None),
                }
                for p in result
            ]

    assert result_dicts == expected
