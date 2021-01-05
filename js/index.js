'use strict';

function sum(a, b) {
  return a + b;
}

function withLog(fn) {
  return function (...args) {
    const result = fn(...args);
    console.log(result);
    return result;
  };
}

const sumWithLog = withLog(sum);

sumWithLog(1,2)
