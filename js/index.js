'use strict';

function Student(firstName, lastName, age, isMale) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isMale = isMale;
}

function StudentPrototype() {
  this.toString = function toString() {
    return `${this.firstName} ${this.lastName}`;
  };
  this.sayHello = function sayHello() {
    return `${this.firstName} ${this.lastName} says "Hello!"`;
  };
  this.say = function say(string) {
    return `Студент ${this.firstName} ${this.lastName} говорит:\n${string}`;
  };
  /* 
  say() метод принимающий строку и возвращающий строку 
  в таком формате:
  `Студент <Имя студента> говорит:
   <содержимое принятой строки>`  
  */
}

const studentPrototypeObject = new StudentPrototype(); // создаём объект, который будет прототипом для всех объектов созданных через new Student()
Student.prototype = studentPrototypeObject;


const stud1 = new Student('Vlad', 'Test', 3, true);
const stud2 = new Student('12', '22', 32, false);
