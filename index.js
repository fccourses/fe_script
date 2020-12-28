'use strict';

const a = +prompt('num1');
const b = +prompt('num2');

// alert(a + ' + ' + b + ' = ' + (a + b));
alert(
`${getDescription()}:
${a} + ${b} = ${a + b}`
);

function getDescription(){
  return 'Sum of these numbers'
}

console.log(` Sum of number: ${2 + 2} `);
