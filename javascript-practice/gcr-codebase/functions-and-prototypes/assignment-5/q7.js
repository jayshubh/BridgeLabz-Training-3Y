function makeMultiplier(multiplier) {
  return function multiply(number) {
    return number * multiplier;
  };
}

const triple = makeMultiplier(3);
console.log(triple(5));
// The returned function closes over `multiplier`, retaining it after the outer
// makeMultiplier call has completed.
