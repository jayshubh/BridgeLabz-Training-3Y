class Cart {
  constructor() {
    this.items = [];
  }

  addItem(name, price, quantity = 1) {
    if (!name || price < 0 || quantity < 1) throw new RangeError("Invalid cart item");
    this.items.push({ name, price, quantity });
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  applyCoupon(code) {
    const match = /^(?:SAVE|DISC)(\d{1,2})$/.exec(code);
    if (!match) throw new Error("Coupon must look like SAVE20 or DISC10");
    const percent = Number(match[1]);
    if (percent < 1 || percent > 100) throw new RangeError("Coupon percent must be 1-100");
    return this.getTotal() * (1 - percent / 100);
  }
}

const cart = new Cart();
cart.addItem("Keyboard", 2400, 1);
cart.addItem("Mouse", 900, 2);
console.log(`Subtotal: $${cart.getTotal().toFixed(2)}`);
console.log(`After SAVE20: $${cart.applyCoupon("SAVE20").toFixed(2)}`);
