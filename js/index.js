'use strict';
/* Даны числа 4, -2, 5, 19, -130, 0, 10. 
Найдите минимальное и максимальное число. */
function getMinAndMaxNumbers() {
  return [getMin(arguments), getMax(arguments)];
}

function getMin(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
function getMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
