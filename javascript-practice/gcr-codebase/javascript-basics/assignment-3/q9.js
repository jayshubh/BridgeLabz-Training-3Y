"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  "{invalid}",
  '{"user":"Mina","age":"22"}',
];
const cleanUsers = [];
const errors = [];

rawData.forEach((entry, index) => {
  try {
    const user = JSON.parse(entry);
    if (!user.user || user.age === undefined || !Number.isFinite(Number(user.age))) {
      throw new TypeError("Missing or invalid user/age field");
    }
    cleanUsers.push({ user: user.user, age: Number(user.age) });
  } catch (error) {
    errors.push({ line: index + 1, message: error.message });
  }
});

console.log("Valid users:", cleanUsers);
console.log("Under 18:", cleanUsers.filter((user) => user.age < 18));
console.log("Errors:", errors);
