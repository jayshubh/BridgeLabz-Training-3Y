const marks = [88, 76, 91, 69, 84];
const average = marks.reduce((sum, mark) => sum + mark, 0) / marks.length;
const percentage = average;
const hasFailedSubject = marks.some((mark) => mark < 35);
let result;

if (hasFailedSubject || percentage < 50) {
  result = "Detained";
} else if (percentage >= 85) {
  result = "Promoted with Distinction";
} else {
  result = "Promoted";
}

console.log(`Average: ${average.toFixed(2)}%`);
console.log(`Result: ${result}`);
