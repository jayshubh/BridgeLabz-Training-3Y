function Person(name) {
  this.name = name;
}
Person.prototype.introduce = function introduce() {
  return `Person: ${this.name}`;
};

function Faculty(name, subject) {
  Person.call(this, name);
  this.subject = subject;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.teach = function teach() {
  return `Teaching ${this.subject}`;
};

function Professor(name, subject, title) {
  Faculty.call(this, name, subject);
  this.title = title;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.research = function research() {
  return `${this.title} ${this.name} researches ${this.subject}`;
};

const professor = new Professor("Nisha", "Biology", "Dr.");
console.log(professor.introduce());
console.log(professor.teach());
console.log(professor.research());
