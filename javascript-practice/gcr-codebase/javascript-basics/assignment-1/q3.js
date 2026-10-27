const expenses = [
  { category: "food", amount: 4200 },
  { category: "travel", amount: 1800 },
  { category: "rent", amount: 12000 },
  { category: "bills", amount: 2300 },
  { category: "leisure", amount: 1700 },
];

const subtotal = expenses.reduce((sum, expense) => sum + expense.amount, 0);
const average = subtotal / expenses.length;
let taxedTotal = subtotal;
taxedTotal += taxedTotal * 0.1;

console.log(`Total: ${subtotal.toFixed(2)}`);
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Total after 10% tax: ${taxedTotal.toFixed(2)}`);
