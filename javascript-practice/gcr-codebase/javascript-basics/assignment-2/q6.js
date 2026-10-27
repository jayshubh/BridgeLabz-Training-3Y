let count = 0;

function increment() {
  count += 1;
  console.log(`Count: ${count}`);
}

function decrement() {
  count -= 1;
  console.log(`Count: ${count}`);
}

function createCounterActions() {
  return {
    increment: () => {
      count += 1;
      console.log(`Nested increment: ${count}`);
    },
  };
}

increment();
decrement();
createCounterActions().increment();
