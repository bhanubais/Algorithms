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
    start = case["start"]
    end = case["end"]
    expected = case["expected"]

    result = main.solve(maze, wall, start, end)
    assert result == expected
