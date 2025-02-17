# JavaScript Zero Division Handling Error

This repository demonstrates a common error in JavaScript: incorrect handling of zero values in division operations.

## Description

The `foo` function attempts to divide `a` by `b`. However, it incorrectly handles the cases where either `a` or `b` is zero. This can lead to errors such as `Infinity` or `NaN`.

## Solution

The solution involves explicitly checking if `b` is zero before performing the division. If `b` is zero, an appropriate error message or default value should be returned. For example, the function can return `Infinity` when dividing by zero, or return 0 as a default value.