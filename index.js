/* const sum = function (a, b) {



  return a + b;
};
const sub = function (a, b) {
  return a - b;
};
const mul = function (a, b) {
  return a * b;
};
const div = function (a, b) {
  return a / b;
};


 */

const getUserInput = function () {
  const input = prompt('Введите что-нибудь');

  /*  let returnValue;
  if (input) {
    returnValue = 'Вы ввели: ' + input;
  } else {
    returnValue = 'Вы ничего не ввели';
  } */

  const returnValue = input ? 'Вы ввели: ' + input : 'Вы ничего не ввели';

  return returnValue;
};
const res = getUserInput();

console.log(res);
