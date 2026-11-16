class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    return `${this.name} works in ${this.department}.`;
  }
}

class Manager extends Employee {
  work() {
    return `${this.name} manages the ${this.department} department.`;
  }
}

const staff = [
  new Employee("Riya", "Engineering"),
  new Manager("Arjun", "Sales"),
];
const result = staff.map((employee) => employee.work()).join("\n");

if (typeof document !== "undefined") {
  const output = document.querySelector("#output");
  if (output) output.textContent = result;
}
console.log(result);
