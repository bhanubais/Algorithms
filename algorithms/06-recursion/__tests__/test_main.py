import json
import os
import sys

import pytest

# Add the parent directory to the path so we can import the module
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import main

# Load test cases
cases_path = os.path.join(os.path.dirname(__file__), "cases.json")
with open(cases_path) as f:
    cases = json.load(f)


@pytest.mark.parametrize("case", cases)
def test_solve(case):
    maze = case["maze"]
    wall = case["wall"]
    start = main.Point(case["start"]["x"], case["start"]["y"])
    end = main.Point(case["end"]["x"], case["end"]["y"])
    expected = case["expected"]

    result = main.solve(maze, wall, start, end)

    # Convert result to list of dicts for comparison to handle both Point objects and raw dicts
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
