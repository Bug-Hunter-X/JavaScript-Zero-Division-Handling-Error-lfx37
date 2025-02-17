function foo(a, b) {
  if (b === 0) {
    return Infinity; // Handle division by zero
    // Alternatively, you could return a default value such as 0 or throw an error
    // return 0; 
    // throw new Error("Division by zero");
  }
  return a / b;
}