const menu = [
  { name: "Burger", price: 180 },
  { name: "Pizza", price: 320 },
  { name: "Salad", price: 140 },
];

function calculateBill(orderItems) {
  const prices = orderItems.map((itemName) => {
    const item = menu.find((menuItem) => menuItem.name === itemName);
    if (!item) throw new Error(`"${itemName}" is not available on the menu.`);
    return item.price;
  });
  return prices.reduce((total, price) => total + price, 0);
}

const messages = [];
try {
  messages.push(`Burger + Salad bill: Rs. ${calculateBill(["Burger", "Salad"])}`);
} catch (error) {
  messages.push(`Unable to calculate bill: ${error.message}`);
}
try {
  calculateBill(["Sushi"]);
} catch (error) {
  messages.push(`Order error: ${error.message}`);
}

const result = messages.join("\n");
if (typeof document !== "undefined") {
  const output = document.querySelector("#output");
  if (output) output.textContent = result;
}
console.log(result);
