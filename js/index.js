'use strict';
/* 1. Возможность отрицательных степеней */
const power = (num, exp) => {
  if (exp === 0) {
    return 1;
  }
  if (exp === 1) {
    return num; //basis
  }
  return exp > 0
    ? num * power(num, exp - 1)
    : 1 / (num * power(num, Math.abs(exp) - 1));
};

/* 
Этапы рекурсии:

  1) Функции вызываются рекурсивно в call stack
  2) Доходим до базы
  3) Функции начнут завершать свою работу
*/

/* 2. Факториал */

const factorial = (n) => (n <= 0 ? 1 : n * factorial(n - 1));

/* 3. 
par(3) // '((()))'
par(2) // '(())'
*/

const par = (n) => (n <= 1 ? '()' : `(${par(n - 1)})`);

/* customFlat() || MyArray.prototype.flat() */
