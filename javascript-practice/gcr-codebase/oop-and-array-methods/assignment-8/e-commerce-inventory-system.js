const products = [
  { id: 1, name: "Keyboard", category: "Electronics", price: 1800, stock: 3 },
  { id: 2, name: "Mouse", category: "Electronics", price: 700, stock: 12 },
  { id: 3, name: "Desk", category: "Furniture", price: 6500, stock: 2 },
  { id: 4, name: "Chair", category: "Furniture", price: 4200, stock: 8 },
  { id: 5, name: "Bottle", category: "Accessories", price: 500, stock: 4 },
];
const LOW_STOCK_LIMIT = 5;

function getLowStockProducts(items) {
  return items.filter((product) => product.stock < LOW_STOCK_LIMIT);
}

function sortProductsByPrice(items) {
  return [...items].sort((first, second) => first.price - second.price);
}

function calculateTotalInventoryValue(items) {
  return items.reduce((total, product) => total + product.price * product.stock, 0);
}

function groupByCategory(items) {
  return items.reduce((groups, product) => {
    if (!groups[product.category]) groups[product.category] = [];
    groups[product.category].push(product.name);
    return groups;
  }, {});
}

const result = [
  `Low stock (< ${LOW_STOCK_LIMIT}): ${getLowStockProducts(products).map((product) => product.name).join(", ")}`,
  `Price order: ${sortProductsByPrice(products).map((product) => `${product.name} (Rs. ${product.price})`).join(", ")}`,
  `Total inventory value: Rs. ${calculateTotalInventoryValue(products)}`,
  `Grouped by category: ${JSON.stringify(groupByCategory(products), null, 2)}`,
].join("\n");

if (typeof document !== "undefined") {
  const output = document.querySelector("#output");
  if (output) output.textContent = result;
}
console.log(result);
