'use strict';

function sum(a, b, ...rest) {
  console.log(rest);
}

const sumArrow = (...rest) => {
  let accumulator = null;

  rest.forEach((number) => {
    accumulator += number;
  });

  return accumulator;
};
