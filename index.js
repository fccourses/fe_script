'use strict';

function createMultiplicationTable(limit) {
  const table = {};
  debugger;
  for (let i = 1; i < limit; i++) {
    for (let j = 1; j < limit; j++) {
      table[`${i} * ${j} = `] = i * j;
    }
  }

  return table;
}

/*  */

/* Определить квартал года по текущему месяцу(1-12) */

function getQuarter(monthNumber) {
  return Math.ceil(monthNumber / 3);
}

/* 
    Написать функцию:
    Создать объект семья
    Ключём будет имя родстенника
    А значением будет информация о нём
    Объект создавать через prompt
*/