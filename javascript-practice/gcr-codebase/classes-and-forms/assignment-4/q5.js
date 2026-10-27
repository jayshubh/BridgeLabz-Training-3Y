const bookingForm = document.querySelector("#booking-form");
const ticketOutput = document.querySelector("#ticket");
const bookingPatterns = {
  name: /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = bookingForm.elements.name.value.trim();
  const email = bookingForm.elements.email.value.trim();
  const seats = Number(bookingForm.elements.seats.value);
  const errors = {
    name: bookingPatterns.name.test(name) ? "" : "Enter a name using letters only.",
    email: bookingPatterns.email.test(email) ? "" : "Enter a valid email address.",
    seats: Number.isInteger(seats) && seats >= 1 && seats <= 10 ? "" : "Choose 1 to 10 seats.",
  };
  for (const [field, message] of Object.entries(errors)) {
    const errorElement = bookingForm.querySelector(`[data-error="${field}"]`);
    errorElement.textContent = message;
    errorElement.style.color = "red";
  }
  if (Object.values(errors).some(Boolean)) return;
  const booking = { name, email, seats };
  ticketOutput.textContent = `Booking confirmed for ${booking.name} (${booking.seats} seat${seats === 1 ? "" : "s"}).`;
});
