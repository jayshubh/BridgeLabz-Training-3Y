"use strict";

function outer() {
  console.log(count);
  var count = 5;
  const inner = () => {
    console.log(count);
    var count = 10;
    console.log(count);
  };
  inner();
  console.log(count);
}

outer();
// The arrow function still creates its own local scope for `var count`; its
// hoisted local binding shadows the outer count just like a function declaration.
