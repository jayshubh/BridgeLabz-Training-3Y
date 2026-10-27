console.log("Start");
setTimeout(() => console.log("Timeout (macrotask)"), 0);
Promise.resolve().then(() => console.log("Promise (microtask)"));
console.log("Synchronous task");
console.log("End");
// After synchronous code ends, JavaScript drains the microtask queue before
// starting the next macrotask such as the timer callback.
