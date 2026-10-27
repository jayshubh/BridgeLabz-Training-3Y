Object.defineProperty(Array.prototype, "myMap", {
  configurable: true,
  writable: true,
  enumerable: false,
  value: function myMap(callback, thisArg) {
    if (this === null || this === undefined) {
      throw new TypeError("myMap called on null or undefined");
    }
    if (typeof callback !== "function") {
      throw new TypeError("myMap callback must be a function");
    }
    const source = Object(this);
    const result = new Array(source.length);
    for (let index = 0; index < source.length; index += 1) {
      if (index in source) {
        result[index] = callback.call(thisArg, source[index], index, source);
      }
    }
    return result;
  },
});

console.log([1, 2, 3].myMap((number) => number * 2));
