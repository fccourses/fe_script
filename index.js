'use strict';

console.log(sum(3, 7));

function sub(a, b) {
  return a - b;
}

function mul(a, b) {// pure func
  return a * b;
}

function div(a, b) {
  return a / b;
}

function sum(a, b) {
  return a + b;
}

function square(num) {// pure func
  const result = mul(num, num);
  return result;
}
