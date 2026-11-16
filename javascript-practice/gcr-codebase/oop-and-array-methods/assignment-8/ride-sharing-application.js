class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicleDetails) {
    super(name, rating);
    this.vehicleDetails = vehicleDetails;
  }
}

class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
  }

  calculateFare() {
    if (this.distance === undefined || this.distance === null || this.distance === "") {
      throw new Error("Trip distance is required.");
    }
    if (!Number.isFinite(this.distance) || this.distance < 0) {
      throw new Error("Trip distance must be a non-negative number.");
    }
    return this.distance * 10;
  }
}

const driver = new Driver("Neha", 4.9, "Blue sedan");
const messages = [`Driver: ${driver.name} (${driver.vehicleDetails}), rating ${driver.rating}`];
try {
  const trip = new Trip("Airport", "City Center", 12);
  messages.push(`${trip.fromLocation} to ${trip.toLocation}: Rs. ${trip.calculateFare()}`);
} catch (error) {
  messages.push(`Trip error: ${error.message}`);
}
try {
  new Trip("Mall", "Station", -3).calculateFare();
} catch (error) {
  messages.push(`Trip error: ${error.message}`);
}

const result = messages.join("\n");
if (typeof document !== "undefined") {
  const output = document.querySelector("#output");
  if (output) output.textContent = result;
}
console.log(result);
