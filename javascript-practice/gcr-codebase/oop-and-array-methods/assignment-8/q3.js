function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.applyDiscount = function (percent) {
  if (!Number.isFinite(percent) || percent < 0 || percent > 100) {
    throw new RangeError("Discount must be between 0 and 100.");
  }
  return this.price * (1 - percent / 100);
};

const products = [
  { product: new Product("Notebook", 120), discount: 10 },
  { product: new Product("Backpack", 1500), discount: 20 },
  { product: new Product("Pen set", 250), discount: 5 },
];
const result = products
  .map(({ product, discount }) =>
    `${product.name}: Rs. ${product.price} with ${discount}% off = Rs. ${product.applyDiscount(discount).toFixed(2)}`)
  .join("\n")
  + "\nAbstraction: applyDiscount() handles the calculation; callers provide only the discount.";

if (typeof document !== "undefined") {
  const output = document.querySelector("#output");
  if (output) output.textContent = result;
}
console.log(result);
