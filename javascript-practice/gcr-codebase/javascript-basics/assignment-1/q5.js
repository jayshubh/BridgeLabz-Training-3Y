const temperature = 24;
const isRaining = false;
const windSpeed = 12;

let advice;
if (isRaining || (temperature < 15 && windSpeed > 20)) {
  advice = isRaining ? "Stay indoors with hot coffee." : "Too cold and windy — stay home.";
} else if (temperature > 35 && !isRaining) {
  advice = "Go swimming.";
} else {
  advice = "Perfect day for a walk.";
}

console.log(advice);
