function applyOperation(numbers, operation) {
  return numbers.map(operation);
}

const numbers = [1, 2, 3, 4];
console.log("Doubled:", applyOperation(numbers, (number) => number * 2));
console.log("Squared:", applyOperation(numbers, (number) => number ** 2));
