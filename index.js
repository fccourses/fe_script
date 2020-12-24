'use strict';

const cat = {
  //C
  name: 'Pushok',
  color: 'red',
  breed: 'Persian',
  age: 5,
  isSleeping: true,
  isMale: true,
  run: function () {
    return 'I AM RUNNING';
  },
};

const res = cat.run();
console.log(res);