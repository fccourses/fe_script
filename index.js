'use strict';

/* Объект с логикой */
function MyArrayProto() {
  this.push = function push() {
    /* Обходим список аргументов до тех пор, пока у него есть аргументы */
    for (let i = 0; i < arguments.length; i++) {
      this[this.length++] = arguments[i];
    }
    return this.length;
  };

  this.pop = function () {
    if (this.length === 0) {
      return;
    }
    const lastItem = this[this.length - 1];
    delete this[--this.length];
    return lastItem;
  };
}

/* Объекты с данными */
function MyArray() {
  this.length = 0;
}

/* Создаём прототип(связь между объектами). Наследование */
MyArray.prototype = new MyArrayProto();

const myArr = new MyArray(1, 2, 3, 4, 5); // 1
const arr = new Array(1, 2, 3, 4, 5);
/* 
myArr.push(1);
myArr.push(2);
myArr.push(3); */
