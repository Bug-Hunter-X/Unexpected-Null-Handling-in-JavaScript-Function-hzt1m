function foo(a, b) {
  if (a === null || b === null) {
    return null; //This will cause unexpected behavior if a or b is 0 or -0
  }
  // ... rest of the function
}

function fooSolution(a, b) {
  if (a === null || b === null) {
    return null;
  }
  // ... rest of the function
} 