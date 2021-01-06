'use strict';

function sum(a, b, ...rest) {
  console.log(rest);
}

const sumArrowFE = (...rest) => {
  let accumulator = null;

  rest.forEach((number) => {
    accumulator += number;
  });

  return accumulator;
};

const sumReduce = (...rest) => {
  return rest.reduce((accumulator, value) => {
    return accumulator + value;
  });
};
