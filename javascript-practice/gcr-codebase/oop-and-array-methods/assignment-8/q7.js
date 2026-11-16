class BankAccount {
  #balance;

  constructor(initialBalance = 0) {
    if (!Number.isFinite(initialBalance) || initialBalance < 0) {
      throw new Error("Initial balance must be a non-negative number.");
    }
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (!Number.isFinite(amount) || amount <= 0) {
      throw new Error("Deposit amount must be greater than zero.");
    }
    this.#balance += amount;
    return this.#balance;
  }

  withdraw(amount) {
    if (!Number.isFinite(amount) || amount <= 0) {
      throw new Error("Withdrawal amount must be greater than zero.");
    }
    if (amount > this.#balance) throw new Error("Insufficient balance.");
    this.#balance -= amount;
    return this.#balance;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
const messages = [`Deposited Rs. 500. Balance: Rs. ${account.deposit(500)}`];
try {
  account.withdraw(2000);
} catch (error) {
  messages.push(`Withdrawal error: ${error.message}`);
}
messages.push(`Current balance: Rs. ${account.getBalance()}`);

const result = messages.join("\n");
if (typeof document !== "undefined") {
  const output = document.querySelector("#output");
  if (output) output.textContent = result;
}
console.log(result);
