'use strict';

const mySymbol = Symbol();

const obj = {
  test: 'test',
  mySymbol: true,
};

const myMap = new Map();
myMap.set(1, {});
myMap.set('1', true);
myMap.set(1, 10000);
myMap.get(1);

myMap.set(obj, 'SUPER IMPORTANT VALUE');
