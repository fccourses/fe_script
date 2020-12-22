const userNumber = +prompt('Введите число:');

debugger;

if (isNaN(userNumber)) {
  console.log('Невалидное число');
} else if (userNumber % 5 === 0) {
  console.log('на 5 делится');
} else if (userNumber % 3 === 0) {
  console.log('на 3 делится');
} else if (userNumber % 2 === 0) {
  console.log('на 2 делится');
} else {
  console.log('не делиться ни на 5, ни на 3, ни на 2');
}

console.log('end of script');
