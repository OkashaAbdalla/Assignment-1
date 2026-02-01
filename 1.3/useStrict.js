"use strict";

 x = 10; // ReferenceError
function strictTest() {
 y = 20; // ReferenceError
}
strictTest();

/*
a) Strict mode throws errors
b) Prevents accidental globals
c) Developers prefer it for safety and debugging
*/