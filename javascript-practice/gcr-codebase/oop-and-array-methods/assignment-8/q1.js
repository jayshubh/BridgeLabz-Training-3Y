class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  calculateAverage() {
    if (this.marks.length === 0) throw new Error("Marks cannot be empty.");
    return this.marks.reduce((total, mark) => total + mark, 0) / this.marks.length;
  }

  getGrade() {
    const average = this.calculateAverage();
    if (average >= 90) return "A";
    if (average >= 75) return "B";
    if (average >= 60) return "C";
    return "F";
  }
}

const students = [
  new Student("Aarav", [92, 88, 95]),
  new Student("Diya", [78, 82, 74]),
  new Student("Kabir", [55, 62, 58]),
];
const result = students
  .map((student) => `${student.name}: average ${student.calculateAverage().toFixed(2)}, grade ${student.getGrade()}`)
  .join("\n");

if (typeof document !== "undefined") {
  const output = document.querySelector("#output");
  if (output) output.textContent = result;
}
console.log(result);
