"use strict";

const score = 50;
function announce() {
  console.log("Game started");
}
let status = "ready";
const startGame = () => console.log(status);

console.log(score);
announce();
startGame();
