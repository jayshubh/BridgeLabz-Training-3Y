const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 },
];

const discountedItems = cart.map((product) => {
  const rate = product.category === "electronics" ? 0.1 :
    product.category === "fashion" ? 0.05 : 0;
  return { ...product, discountedPrice: product.price * (1 - rate) };
});
const subtotal = discountedItems.reduce((sum, product) => sum + product.discountedPrice, 0);
const finalTotal = subtotal > 50000 ? subtotal * 0.95 : subtotal;

console.table(discountedItems);
console.log(`Final total: ${finalTotal.toFixed(2)}`);
