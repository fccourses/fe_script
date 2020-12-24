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
  sleep: function () {
    return 'ZZZZ.....';
  },
  meow: function () {
    return 'MEOW!!!';
  },
};

function Cat(name, color, breed, age, isSleeping, isMale) {
  this.name = name;
  this.color = color;
  this.breed = breed;
  this.age = age;
  this.isSleeping = isSleeping;
  this.isMale = isMale;
  /* Methods */
  this.run = function () {
    return 'I AM RUNNING!';
  };
}

const newCat = new Cat('Murzik', 'white', 'Spinx', 3, true, true);

/* 1.
Функция конструкор для создания пользователей: 
name, surname, full name, age 
*/

/* 2.
Функция конструктор для стран Country:
name, population, area, density


1. Посмотрите на плотность населения    - x
2. Изменяете либо площадь, либо население
3. Посмотрите на плотность населения    - y
*/

function Country(name, population, area) {
  this.name = name;
  this.population = population;
  this.area = area;
  this.getDensity = function () {
    return this.population / this.area;
  };
}

const ukr = new Country('Ukraine', 72_000_000, 576_000);

/* Функция конструктор для авто:
  name, maxSpeed, speed
  .accelerate();
  .deaccelerate();
  .stop();

*/

function Auto(name, maxSpeed) {
  this.name = name;
  this.speed = 0;
  this.maxSpeed = maxSpeed;

  this.accelerate = function (value) {
    if (value < 0) {
      return false;
    }
    this.speed = this.speed + value;
    if (this.speed > this.maxSpeed) {
      return (this.speed = this.maxSpeed);
    }
    return this.speed;
  };
  this.stop = function () {
    return (this.speed = 0);
  };
}

const auto = new Auto('Bmw', 220);
