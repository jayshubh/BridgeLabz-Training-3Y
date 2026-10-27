const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 24;
const distance = Math.abs(secretNumber - userGuess);

if (userGuess === secretNumber) {
  console.log("Correct guess!");
} else if (distance <= 3 && userGuess >= 1 && userGuess <= 50) {
  console.log("Very close!");
} else if (userGuess > secretNumber) {
  console.log("Too high");
} else {
  console.log("Too low");
}

console.log(`Secret number: ${secretNumber}`);
