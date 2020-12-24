'use strict';

const cat = { //C
  name: 'Pushok',
  color: 'red',
  breed: 'Persian',
  age: 5,
  isSleeping: true,
  isMale: true,
};

console.log(cat.age); //R

cat.age++; //U
cat.age = cat.age + 1;

console.log(cat);

cat.isSleeping = undefined; //bad delete

delete cat.isSleeping; //D
