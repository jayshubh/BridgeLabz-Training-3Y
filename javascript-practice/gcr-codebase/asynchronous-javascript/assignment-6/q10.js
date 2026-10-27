function deliveryStep(label) {
  const delay = 1000 + Math.floor(Math.random() * 1001);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.12) reject(new Error(`${label} failed`));
      else resolve(label);
    }, delay);
  });
}

async function runPipeline() {
  console.log("Start Pipeline");
  const steps = [
    ["takeOrder", "Step 1: Order taken"],
    ["prepare", "Step 2: Food prepared"],
    ["pack", "Step 3: Package ready"],
    ["dispatch", "Step 4: Out for delivery"],
    ["deliver", "Delivery completed!"],
  ];

  try {
    for (const [action, message] of steps) {
      await deliveryStep(action);
      console.log(message);
    }
  } catch (error) {
    console.error("Pipeline failed!", error.message);
  }
}

runPipeline();
