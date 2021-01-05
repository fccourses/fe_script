'use strict';

const users = [{}, {}, {}];
/* 
function square(currentNumber) {
  console.log(currentNumber * currentNumber);
  return currentNumber * currentNumber;
}
 */
function addSubscribe(user) {
  user.isSubscribed = true;
}

users.forEach(addSubscribe);

// const myArr = new MyArray(1, 2, 3, 4, 5);
//=========SOME===========================
const nums = [1, 3, 5, 7, 10];

function isEven(number) {
  return number % 2 === 0;
}

const res = nums.some(isEven);
console.log(res);

const myArr = new MyArray(2, 2, 2, 2, 1);

console.log(myArr.some(isEven));

// ===========EVERY===========

console.log(myArr.every(isEven)); //false
