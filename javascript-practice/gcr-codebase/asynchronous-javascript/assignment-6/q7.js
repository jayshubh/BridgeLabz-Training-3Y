function loadModule(name, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.25) reject(new Error(`${name} failed to load`));
      else resolve(`${name} Loaded`);
    }, delay);
  });
}

async function loadDashboard() {
  const startTime = Date.now();
  const results = await Promise.allSettled([
    loadModule("Profile", 2000),
    loadModule("Posts", 1500),
    loadModule("Messages", 1000),
  ]);
  results.forEach((result, index) => {
    const moduleName = ["Profile", "Posts", "Messages"][index];
    console.log(`${moduleName}: ${result.status}`, result.status === "fulfilled" ? result.value : result.reason.message);
  });
  console.log(`Time taken: ${Date.now() - startTime} ms`);
}

loadDashboard();
