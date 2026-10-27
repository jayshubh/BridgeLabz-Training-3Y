const x = 16.75;
const rounded = Math.round(x);
const squareRoot = Math.sqrt(x);
const cube = Math.pow(x, 3);
const randomNumber = Math.floor(Math.random() * 41) + 10;

console.log(`Rounded: ${rounded}\nSquare root: ${squareRoot.toFixed(2)}\nCube: ${cube.toFixed(2)}\nRandom (10-50): ${randomNumber}`);
