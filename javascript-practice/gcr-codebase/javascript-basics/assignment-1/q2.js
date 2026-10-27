const userName = "Riya";
const age = 21;
const isEnrolled = true;
const scores = [82, 91, 77];
const profile = { city: "Jaipur" };
const middleName = null;
let optionalNote;

const entries = [
  ["userName", userName, typeof userName],
  ["age", age, typeof age],
  ["isEnrolled", isEnrolled, typeof isEnrolled],
  ["scores", scores, Array.isArray(scores) ? "array" : typeof scores],
  ["profile", profile, typeof profile],
  ["middleName", middleName, "null"],
  ["optionalNote", optionalNote, typeof optionalNote],
];

console.table(entries.map(([label, value, type]) => ({ label, value, type })));
