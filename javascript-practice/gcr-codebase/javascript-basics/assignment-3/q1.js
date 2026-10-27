"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumbers = [];
const invalidNumbers = [];

for (const value of apiData) {
  const numberValue = Number(value);
  const isValid = value !== null && value !== undefined &&
    String(value).trim() !== "" && Number.isFinite(numberValue);
  if (isValid) validNumbers.push(numberValue);
  else invalidNumbers.push(value);
  console.log({
    original: value,
    number: numberValue,
    boolean: Boolean(value),
    string: String(value),
    validNumber: isValid,
  });
}

console.log({ validNumbers, invalidNumbers });
