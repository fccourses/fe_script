'use strict';

const arr = ['4807539845', '2435y237', '23452435'];
const arrTels = new Array('4807539845', '2435y237', '23452435');

/* Объект с логикой */
function MyArrayProto() {
  this.push = function push(item) {
    this[this.length] = item;
    return ++this.length;
  };

  this.pop = function () {
    /* Исправить отрицательный length */
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

const myArr = new MyArray(); // 1
const myArr2 = new MyArray(); // 2
