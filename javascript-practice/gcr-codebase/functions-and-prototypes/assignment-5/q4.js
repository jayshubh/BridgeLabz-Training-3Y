function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

Car.prototype.getDetails = function getDetails() {
  return `${this.brand} ${this.model}`;
};

const firstCar = new Car("Toyota", "Corolla");
const secondCar = new Car("Honda", "Civic");
console.log(firstCar.getDetails());
console.log(secondCar.getDetails());
console.log(Object.hasOwn(firstCar, "getDetails")); // false: the method is shared.
