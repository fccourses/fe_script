/*
  Таска на switch:
  В переменной day лежит какое-то число из интервала от 1 до 31.
  Определите в какую декаду месяца попадает это число 
  (в первую, вторую или третью). 
  Tip: break;
*/
const getDecade = function (day) {
  const control = +day;
  switch (control) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10: {
      return 1;
    }
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21: {
      return 2;
    }
    default: {
      return null;
    }
  }
};

/* 
  Напишите калькулятор. 2 Числа и операцию спрашивать у пользователя.
*/

const sum = function (a, b) {
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

const calculate = function (num1, num2, operation) {
  if (isNaN(num1 - num2)) {
    return false;
  }
  let f;
  switch (operation) {
    case '/': {
      f = div;
      break;
    }
    case '*': {
      f = mul;
      break;
    }
    case '+': {
      f = sum;
      break;
    }
    case '-': {
      f = sub;
      break;
    }
  }
  if (typeof f === 'function') {
    return f(num1, num2);
  }
  return null;
};

const userInput1 = +prompt('1');
const userInput2 = +prompt('2');
const sign = prompt('sign');

const box = calculate(userInput1, userInput2, sign);
console.log(box);
