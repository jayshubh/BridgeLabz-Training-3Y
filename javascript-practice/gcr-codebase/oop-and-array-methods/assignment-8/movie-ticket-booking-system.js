class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }
}

MovieTicket.prototype.printTicket = function () {
  return `${this.movieName} | Seat ${this.seatNo} | Rs. ${this.price}`;
};

class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee) {
    super(movieName, seatNo, price);
    this.convenienceFee = convenienceFee;
  }

  getTotalAmount() {
    return this.price + this.convenienceFee;
  }
}

const ticket = new OnlineTicket("The Great Adventure", "B12", 250, 30);
const result = [
  ticket.printTicket(),
  `Convenience fee: Rs. ${ticket.convenienceFee}`,
  `Total amount: Rs. ${ticket.getTotalAmount()}`,
  `Prototype chain works: ${MovieTicket.prototype.isPrototypeOf(ticket)}`,
].join("\n");

if (typeof document !== "undefined") {
  const output = document.querySelector("#output");
  if (output) output.textContent = result;
}
console.log(result);
