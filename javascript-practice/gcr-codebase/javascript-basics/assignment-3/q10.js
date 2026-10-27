"use strict";

function outer() {
  console.log("Outer count before initialization: undefined (var hoisting)");
  var count = 5;
  function inner() {
    console.log(`Inner count before initialization: undefined (shadowed var)`);
    var count = 10;
    console.log(`Inner count after initialization: ${count}`);
  }
  inner();
  console.log(`Outer count after inner call: ${count}`);
}

outer();
