// NON-STRICT MODE
x = 10;
console.log("Non-strict x:", x);

function nonStrictTest() {
  y = 20;
}
nonStrictTest();

console.log("Non-strict y:", y);

/*
a) Non-strict mode allows undeclared variables
b) Variables become global automatically
c) This can cause bugs
*/

