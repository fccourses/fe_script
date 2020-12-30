'use strict';

/* 

new Ladder(); - ЛЕСТНИЦА

value - та ступенька на который сейчас

up() - поднимает вас на одну ступеньку
down() - опускает на одну
showStep() - показывает на какой вы ступеньке


Сделать это возможным:
ladder.up().up().down().showStep(); // 1
*/

function Ladder() {
  this.value = 0;

  this.up = function () {
    this.value++;
    return this;
  };
  this.down = function () {
    this.value--;
    return this;
  };

  this.showStep = function () {
    return this.value;
  };
}
const l1 = new Ladder();
