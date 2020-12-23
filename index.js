'use strict';

const res = highOrderFunction(15, 25, sub);

console.log(res);

function highOrderFunction(num1, num2, functionToPerformTheOperation) {
  const result = functionToPerformTheOperation(num1, num2);
  return result;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function sum(a, b) {
  return a + b;
}
