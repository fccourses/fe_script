'use strict';

const user = {
  'favorite color': 'red',
  0: 'test value',
  2: 'value unique',
};


/* Прочитали существующие свойства */
console.log(user['0']);
console.log(user['2']);
console.log(user[0]);
console.log(user[2]);
console.log(user['favorite color']);

const test = 'favorite color';
user[test];
console.log(user[test]);


/* Создали новое свойство */
const valueFromUser = 'tset';
user[valueFromUser] = 3;
