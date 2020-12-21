const userInput1 = +prompt("Введите число 1:");
const userInput2 = +prompt("Введите число 2:");

const getSumOfTwo = function (num1, num2) {
  //function expression
  const result = num1 + num2;

  if (!isNaN(result)) {
    return result;
  }
  return false;
};

const sum = getSumOfTwo(userInput1, userInput2);

if (!sum) {
  alert("введите правильно ваши числа");
} else {
  console.log(sum);
}
