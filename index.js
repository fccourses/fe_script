const sayHelloTo = function (name) {
  alert("Hello, " + name);
  return; // Завершение работы функции.
  // После return а функция не работает.
};

const userName = prompt('Enter your name');

const box = sayHelloTo(userName);
console.log(box);