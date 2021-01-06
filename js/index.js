'use strict';

function countDown(num) {
  console.log(num);
  if (num > 0) {
    countDown(num - 1); // recursion
  }
  return true; //basis
}
