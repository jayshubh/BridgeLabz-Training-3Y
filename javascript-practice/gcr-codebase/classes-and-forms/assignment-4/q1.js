class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(percent) {
    if (percent < 0 || percent > 100) throw new RangeError("Discount must be 0-100%");
    this.price *= 1 - percent / 100;
  }

  getDetails() {
    return `${this.name} (${this.category}) - $${this.price.toFixed(2)}`;
  }
}

const products = [
  new Product(1, "Desk lamp", 1450, "Home"),
  new Product(2, "Notebook", 180, "Stationery"),
  new Product(3, "Headphones", 3200, "Electronics"),
];
products[2].applyDiscount(10);
products.filter((product) => product.price > 1000)
  .forEach((product) => console.log(product.getDetails()));
