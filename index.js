const getSumOfTwo = function () { //function expression

  const userInputNumber1 = +prompt("Введите число 1:");
  const userInputNumber2 = +prompt("Введите число 2:");

  const result = userInputNumber1 + userInputNumber2;

  const verdict = isNaN(result);

  if (!verdict) {
    alert("Сумма чисел: " + result);
  } else {
    alert("Вы ввели не число!");
  }
  
};

getSumOfTwo();