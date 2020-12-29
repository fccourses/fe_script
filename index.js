'use strict';

const t1 = 1;
const t2 = 1;

const obj1 = {
  test: 1,
};

const obj2 = {
  test: 1,
};

const link1 = obj1; // копирование по ссылке

console.log(link1 === obj1); //true
console.log(link1 === obj2); //false

link1.test2 = 'str';

console.log(link1);
console.log(obj1);
