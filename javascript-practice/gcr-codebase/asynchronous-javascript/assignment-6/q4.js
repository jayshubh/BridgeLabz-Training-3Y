function contactServer(name, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) reject(new Error(`${name} failed`));
      else resolve(`${name} responded`);
    }, delay);
  });
}

const serverA = contactServer("Server A", 2000);
const serverB = contactServer("Server B", 3000);

Promise.all([serverA, serverB])
  .then(() => console.log("Deployment completed for all servers"))
  .catch((error) => console.error(`Deployment incomplete: ${error.message}`));
Promise.race([serverA, serverB])
  .then((response) => console.log(`Fastest response: ${response}`))
  .catch((error) => console.error(`First response failed: ${error.message}`));
