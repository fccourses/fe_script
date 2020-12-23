'use strict';
/*
1. Спрашивать у пользователя пароль до тех пор,
   пока он не введёт правильный
   1.1 Ограничить кол-во попыток до 5
*/
let count = 0;
while (count++ < MAX_TRY) {
  const userInput = prompt('Pass here');

  if (userInput === GOOD_PASSWORD) {
    break;
  }
}

/* 2. Найти факториал числа */

