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
  return result;
};
const res = getUserInput();

console.log(res ? 'Вы ввели: ' + res : 'Вы ничего не ввели');
