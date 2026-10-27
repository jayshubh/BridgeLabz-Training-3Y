"use strict";

const requestedRows = 5;

for (let row = 1; row <= requestedRows; row += 1) {
  console.log("* ".repeat(row).trimEnd());
}

// `let` gives each loop iteration a block-scoped counter; strict mode catches
// accidental assignments to undeclared variables.
