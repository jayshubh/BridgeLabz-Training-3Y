class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    if (percent < 0) throw new RangeError("Bonus cannot be negative");
    this.salary *= 1 + percent / 100;
  }
}

const employees = [
  new Employee(1, "Asha", "Design", 52000),
  new Employee(2, "Dev", "Engineering", 75000),
  new Employee(3, "Meera", "Support", 48000),
  new Employee(4, "Kabir", "Finance", 63000),
  new Employee(5, "Tara", "Marketing", 58000),
];
employees[1].applyBonus(8);
console.table(employees.map((employee) => ({
  name: employee.name,
  department: employee.department,
  annualSalary: employee.getAnnualSalary(),
})));
console.log(`Annual company payout: $${employees.reduce((sum, employee) => sum + employee.getAnnualSalary(), 0).toFixed(2)}`);
