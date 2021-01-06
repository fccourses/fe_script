'use strict';

function countDown(num) {
  console.log(num);
  if (num > 0) {
    countDown(num - 1); // recursion
  }
  return true; //basis
}

const logRange = (min, max) => {
  if (min > max) {
    return false;
  }
  console.log(min);
  if (min < max) {
    logRange(min + 1, max);
  }
  return true;
};
