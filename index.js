const sayHelloTo = function (name) {
  alert('Hello, ' + name);
  return; // Завершение работы функции.
  // После return а функция не работает.
};

// const userName = prompt('Enter your name');

// const box = sayHelloTo(userName);
// console.log(box);

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
};

/**
 * Solve the square equation
 * @param {number} a - first coef
 * @param {number} b - second coef
 * @param {number} c - third coef
 * @returns { boolean | null | number[] } - roots of square eq or error
 */
const solveSquareEquation = function (a, b, c) {
  if (isNaN(a - b - c)) {
    return null;
  }
  const d = b * b - 4 * a * c;

  if (d < 0) {
    return false;
  }

  if (d === 0) {
    const x = -b / (2 * a);
    return [x, x];
  }

  if (d > 0) {
    const dSqrt = d ** (1 / 2);
    const x1 = (-b + dSqrt) / (2 * a);
    const x2 = (-b - dSqrt) / (2 * a);

    return [x1, x2];
  }
};
