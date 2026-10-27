"use strict";

class InvalidOperationError extends Error {}

function calculate(operation, num1, num2) {
  switch (operation) {
    case "add": return num1 + num2;
    case "subtract": return num1 - num2;
    case "divide":
      if (num2 === 0) throw new RangeError("Cannot divide by zero");
      return num1 / num2;
    case "power": return num1 ** num2;
    case "root":
      if (num1 < 0) throw new RangeError("Cannot take the root of a negative number");
      return Math.sqrt(num1);
    default: throw new InvalidOperationError(`Unknown operation: ${operation}`);
  }
}

try {
  const result = calculate("divide", 25, 0);
  console.log(`Result: ${result}`);
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}
