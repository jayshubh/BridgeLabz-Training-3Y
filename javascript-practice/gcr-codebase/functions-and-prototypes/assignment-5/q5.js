function Person(name) {
  this.name = name;
}
Person.prototype.describe = function describe() {
  return `Name: ${this.name}`;
};

function Student(name, branch) {
  Person.call(this, name);
  this.branch = branch;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.describeStudent = function describeStudent() {
  return `${this.describe()}, branch: ${this.branch}`;
};

const student = new Student("Ira", "Computer Science");
console.log(student.describeStudent());
console.log(student instanceof Person, student instanceof Student);
