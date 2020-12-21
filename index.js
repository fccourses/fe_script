const sayHelloTo = function (name) {
  alert("Hello, " + name);
  return; // Завершение работы функции.
  // После return а функция не работает.
};

const userName = prompt("Enter your name");

const box = sayHelloTo(userName);
console.log(box);

/* 
1. Функция, которая возвращает минимальное значение.
2. Функция, которая возвращает максимальное значение.
3. Функция, которая проверяет чётность числа.
(*4. Которая решает квадратные уравнения.)
*/

const getMinValue = function (a, b) {
  if (a > b) {
    return b;
  }
  return a;
};

const getMaxValue = function (a, b) {
  if (a < b) {
    return b;
  }
  return a;
};

const isEven = function (number) {
  return number % 2 === 0;
}