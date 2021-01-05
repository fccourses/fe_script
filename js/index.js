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
