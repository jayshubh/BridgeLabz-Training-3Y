function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) reject(new Error("Temporary order service failure"));
      else resolve("Order accepted");
    }, 300);
  });
}

async function processOrder() {
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const result = await submitOrder();
      console.log(`Attempt ${attempt}: Success — ${result}`);
      return;
    } catch (error) {
      console.log(`Attempt ${attempt}: Failed — ${error.message}`);
    }
  }
  throw new Error("Order could not be processed");
}

processOrder().catch((error) => console.error(error.message));
