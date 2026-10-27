function getBugs(shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject(new Error("Bug service is unavailable"));
      else resolve(["UI glitch", "API timeout", "Login failure"]);
    }, 500);
  });
}

getBugs(Math.random() < 0.2)
  .then((bugs) => console.table(bugs.map((description, index) => ({ id: index + 1, description }))))
  .catch((error) => console.error(`Could not load bugs: ${error.message}`));
