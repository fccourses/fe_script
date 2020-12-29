'use strict';

const obj1 = {};

const obj2 = Object();

function MyObj() {
  if (!new.target) {
    return new MyObj();
  }
}

console.log(MyObj());
