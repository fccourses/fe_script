const userInput1 = +prompt("Введите число 1:");
const userInput2 = +prompt("Введите число 2:");

const getSumOfTwo = function (num1, num2) {
  //function expression
  return num1 + num2;
};

const sum = getSumOfTwo(userInput1, userInput2);

console.log(sum);
