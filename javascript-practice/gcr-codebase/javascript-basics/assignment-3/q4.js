"use strict";

function showMessage() {
  const greeting = "Welcome";
  console.log(greeting);
}

showMessage();

// Strict mode rejects assignment to an undeclared name; declaring it with const
// keeps the value in the function's local scope.
