const userInputNumber1 = prompt("Введите число 1:");
const userInputNumber2 = prompt("Введите число 2:");

const userNumber1 = +userInputNumber1;
const userNumber2 = +userInputNumber2;

const result = userNumber1 + userNumber2;

const verdict = isNaN(result);

if (!verdict) {
  alert("Сумма чисел: " + result);
} else {
  alert("Вы ввели не число!");
}
