class FitnessAnalytics {
  constructor(workouts) {
    if (!Array.isArray(workouts) || workouts.length === 0) {
      throw new Error("Workout dataset cannot be empty.");
    }
    this.workouts = workouts;
  }

  getActiveUsers() {
    return this.workouts.filter((workout) => workout.steps > 7000);
  }

  getAverageCalories() {
    return this.workouts.reduce((total, workout) => total + workout.calories, 0) / this.workouts.length;
  }

  getUserSummary() {
    return this.workouts.map(
      (workout) => `${workout.user}: ${workout.steps} steps, ${workout.calories} calories`,
    );
  }
}

const workouts = [
  { user: "A", steps: 8000, calories: 300 },
  { user: "B", steps: 12000, calories: 500 },
  { user: "C", steps: 4000, calories: 200 },
];
const analytics = new FitnessAnalytics(workouts);
const messages = [
  `Active users: ${analytics.getActiveUsers().map((workout) => workout.user).join(", ")}`,
  `Average calories: ${analytics.getAverageCalories().toFixed(2)}`,
  "User summaries:",
  ...analytics.getUserSummary(),
];
try {
  new FitnessAnalytics([]);
} catch (error) {
  messages.push(`Dataset error: ${error.message}`);
}

const result = messages.join("\n");
if (typeof document !== "undefined") {
  const output = document.querySelector("#output");
  if (output) output.textContent = result;
}
console.log(result);
