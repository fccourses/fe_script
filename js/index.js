'use strict';

const numbers = [1, 1, 32, 112, 1243, 32, 4];
const numbers2 = [1234, 1324, 43, 4356, 4];

const arr = [...numbers, ...numbers2];

const sumArrowFE = (...rest) => { //rest operator
  let accumulator = null;

  rest.forEach((number) => {
    accumulator += number;
  });

  return accumulator;
};

const sumReduce = (...rest) => { //rest operator
  return rest.reduce((accumulator, value) => {
    return accumulator + value;
  });
};

sumArrowFE(...numbers); //spread operator
sumReduce(...numbers); //spread operator
