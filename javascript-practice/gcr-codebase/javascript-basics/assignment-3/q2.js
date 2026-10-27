"use strict";

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" },
];

for (const employee of employees) {
  try {
    const salary = Number(employee.salary);
    const years = Number(employee.years);
    if (!employee.name || !Number.isFinite(salary) || !Number.isFinite(years)) {
      throw new TypeError("Employee data is missing or invalid");
    }
    const bonus = salary * (years > 3 ? 0.1 : 0.05);
    console.log(`${employee.name}: salary $${salary.toFixed(2)}, bonus $${bonus.toFixed(2)}`);
  } catch (error) {
    console.error(`Could not calculate employee bonus: ${error.message}`);
  }
}
