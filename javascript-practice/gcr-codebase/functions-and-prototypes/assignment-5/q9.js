function Person(name) {
  this.name = name;
}
Person.prototype.introduce = function introduce() {
  return `Name: ${this.name}`;
};

class Student extends Person {
  constructor(name, branch) {
    super(name);
    this.branch = branch;
  }

  describe() {
    return `${this.introduce()}, branch: ${this.branch}`;
  }
}

console.log(new Student("Ira", "Computer Science").describe());
