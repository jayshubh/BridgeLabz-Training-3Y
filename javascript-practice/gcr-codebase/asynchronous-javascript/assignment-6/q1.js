function asyncStep(stepName) {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.floor(Math.random() * 1001);
    setTimeout(() => {
      if (Math.random() < 0.1) reject(new Error(`${stepName} failed`));
      else {
        console.log(`${stepName} complete`);
        resolve();
      }
    }, delay);
  });
}

asyncStep("Boiling water")
  .then(() => asyncStep("Brewing coffee"))
  .then(() => asyncStep("Pouring into a cup"))
  .then(() => console.log("Coffee ready for the team!"))
  .catch((error) => console.error(`Coffee process stopped: ${error.message}`));
