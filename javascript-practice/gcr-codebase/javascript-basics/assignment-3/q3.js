"use strict";

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null,
];
const validTransactions = [];
const invalidTransactions = [];

for (const transaction of transactions) {
  try {
    if (transaction === null) throw new TypeError("Null transaction");
    if (transaction.id === undefined || transaction.amount === undefined) {
      throw new ReferenceError("Missing id or amount");
    }
    if (transaction.amount < 0) throw new RangeError("Negative amount");
    validTransactions.push(transaction);
  } catch (error) {
    invalidTransactions.push({ transaction, error: error.message });
  }
}

console.log({ validTransactions, invalidTransactions });
console.log(`Successful: ${validTransactions.length}; failed: ${invalidTransactions.length}`);
