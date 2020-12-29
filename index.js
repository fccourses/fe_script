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
function MyArray(...args) {
  this.length = 0;

  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
}

/* Создаём прототип(связь между объектами). Наследование */
MyArray.prototype = new MyArrayProto();

const myArr = new MyArray(1, 2, 3, 4, 5); // 1
const arr = new Array(1, 2, 3, 4, 5);
/* 
myArr.push(1);
myArr.push(2);
myArr.push(3); 
*/

/*
Напишите функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:
Хранить «текущее значение» в свойстве value. 
Начальное значение устанавливается в аргументе конструктора startingValue.

Метод read() использует prompt для получения числа и прибавляет его к свойству value.
Таким образом, свойство value является текущей суммой всего,
что ввёл пользователь при вызовах метода read(),
с учётом начального значения startingValue. 
*/

function Accumulator(startingValue) {
  if (!this.checkNumber(startingValue)) {
    this.value = startingValue;
  }
}

function AccumulatorProto() {
  this.read = function read() {
    const userNumber = +prompt('Введите число');
    if (this.checkNumber(userNumber)) {
      return;
    }
    this.value += userNumber;
    return this.value;
  };

  this.checkNumber = function checkNumber(number) {
    return isNaN(number) && number > 0;
  };
}

Accumulator.prototype = new AccumulatorProto();
