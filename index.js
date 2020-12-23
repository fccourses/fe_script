'use strict';

let count = 0;

while (true) {
  count++;

  if (count % 2 === 1) {
    continue;
  }

  console.log(count); /* ТОлько чётные числа логировать */
  
  if (count > 10) {
    break;
  }
}

console.log('end of loop');
