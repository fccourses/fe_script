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
  const result = prompt('Введите что-нибудь');

  /*  if (result) {
    return result;
  }
  return 'Вы ничего не ввели'; */

  const returnValue = result ? result : 'Вы ничего не ввели';

  return returnValue;
};

const res = getUserInput();

alert(res);
