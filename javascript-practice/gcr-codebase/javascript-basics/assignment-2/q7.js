const feedback = "Great product! Fast delivery and amazing sound quality!";
const words = feedback.trim().split(/\s+/);
const needsImprovement = ["bad", "poor"].some((word) =>
  feedback.toLowerCase().includes(word)
);

console.log(`Word count: ${words.length}`);
console.log(needsImprovement ? "Needs Improvement" : "Positive Feedback");
