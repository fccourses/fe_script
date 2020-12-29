'use strict';

const obj1 = {};

const obj2 = Object();

function MyObj() {
  // new - создаёт пустой объект для функции конструктора.
  // новосозданный объект - контекст( this )
  if (!new.target) {
    return new MyObj();
  }

  this.prop = 'value';

}

console.log(MyObj());
