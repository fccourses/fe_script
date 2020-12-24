'use strict';
/*
1. Спрашивать у пользователя пароль до тех пор,
   пока он не введёт правильный
   1.1 Ограничить кол-во попыток до 5
*/
/* 
let count = 0;
while (count < MAX_TRY) {
  count++;
  const userInput = prompt('Pass here');

  if (userInput === GOOD_PASSWORD) {
    break;
  }
}

for (let count = 0; count < MAX_TRY; count++) {
  const userInput = prompt('Pass here');

  if (userInput === GOOD_PASSWORD) {
    break;
  }
} */

/*          Функции:                    */
/* 2. Найти факториал числа */

function factorial(number) {
  if (number < 0) {
    return null;
  }

  if (number === 0) {
    return 1;
  }

  if (number > MAX_SAFE_FACTORIAL) {
    return false;
  }

  let result = 1n;

  for (let i = 1; i <= number; i++) {
    result *= BigInt(i);
  }

  return result;
}

/* 3. Возвести число в заданную степень(power) */
