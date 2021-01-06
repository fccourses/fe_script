'use strict';

const power = (num, exp) => {
  debugger;
  if (exp <= 1) {
    return num; //basis
  }
  return num * power(num, exp - 1); //recursion
};

/* 
Этапы рекурсии:

  1) Функции вызываются рекурсивно в call stack
  2) Доходим до базы
  3) Функции начнут завершать свою работу
*/
