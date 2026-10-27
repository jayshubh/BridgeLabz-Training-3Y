let salary = 52000;
const annualIncrementRate = 0.06;
const projection = [];

for (let year = 1; year <= 5; year += 1) {
  salary *= 1 + annualIncrementRate;
  projection.push({ year, salary: Number(salary.toFixed(2)) });
}

console.table(projection);
