# Unexpected Null Handling in JavaScript

This repository demonstrates a common, yet subtle, bug in JavaScript related to null handling. The issue arises from using loose equality (`==`) instead of strict equality (`===`) when comparing values to `null`.

## The Bug

The `bug.js` file contains a function `foo` that checks if input parameters `a` and `b` are null using loose equality.  This leads to an unexpected outcome because loose equality will equate `0` and `-0` to `null`, resulting in the function returning `null` even if it receives numeric parameters with 0 values.

## The Solution

The `bugSolution.js` file fixes this by using strict equality (`===`) in the null check. Strict equality performs type checking before value comparison, preventing the error.

## How to Reproduce

1. Clone this repository.
2. Run `bug.js` and `bugSolution.js` to see the difference in behavior when passing 0 or -0 as parameters.

## Lesson Learned

Always use strict equality (`===`) when comparing values to `null` in JavaScript to avoid unexpected behavior caused by type coercion.