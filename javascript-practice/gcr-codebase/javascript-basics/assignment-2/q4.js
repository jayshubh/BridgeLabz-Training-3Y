const scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);
const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
const passedCount = scores.filter((score) => score >= 50).length;

console.log(`Scores: ${scores.map((score) => score).join(", ")}`);
console.table([{
  highest: Math.max(...scores),
  lowest: Math.min(...scores),
  average: Number(average.toFixed(2)),
  passed: passedCount,
}]);
