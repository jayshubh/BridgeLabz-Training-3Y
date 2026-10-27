const firstNumber = Math.floor(Math.random() * 20) + 1;
const secondNumber = Math.floor(Math.random() * 20) + 1;
const operators = ["+", "-", "*", "/"];
const operator = operators[Math.floor(Math.random() * operators.length)];
let answer;

switch (operator) {
  case "+":
    answer = firstNumber + secondNumber;
    break;
  case "-":
    answer = firstNumber - secondNumber;
    break;
  case "*":
    answer = firstNumber * secondNumber;
    break;
  case "/":
    answer = Number((firstNumber / secondNumber).toFixed(2));
    break;
  default:
    throw new Error("Unsupported arithmetic operator");
}

console.log(`Question: ${firstNumber} ${operator} ${secondNumber}`);
console.log(`Answer: ${answer}`);
