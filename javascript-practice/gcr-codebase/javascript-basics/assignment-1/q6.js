const purchaseTotal = 7350;
const discountRate =
  purchaseTotal >= 10000 ? 0.25 :
    purchaseTotal >= 5000 ? 0.15 :
      purchaseTotal >= 2000 ? 0.05 : 0;
const discount = Math.round(purchaseTotal * discountRate);
const finalPrice = Math.round(purchaseTotal - discount);

console.log(`Original total: ${Math.round(purchaseTotal)}`);
console.log(`Discount: ${discountRate * 100}%`);
console.log(`Final price: ${finalPrice}`);
