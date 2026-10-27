"use strict";

function demo(first, second) {
  const total = first + second;
  console.log(`Total: ${total}`);
}

demo(5, 10);
// Strict mode rejects duplicate parameter names, undeclared assignments, and
// deleting local variables. `const` and distinct parameters are valid ES6 fixes.
