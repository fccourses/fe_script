'use strict';
console.log(sum2(5, 5));

const sum1 = function (a, b) {
  //function expression
  return a + b;
};

const sub = function (a, b) {
  return a - b;
};

const mul = function (a, b) {
  return a * b;
};

const div = function (a, b) {
  return a / b;
};

function sum2(a, b) {
  // function declaration
  return a + b;
}
