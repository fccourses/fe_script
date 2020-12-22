const userInput = prompt('Выберите позицию меню:\n1-Чай\n2-Кофе\n3-Капучино');

debugger;

switch (userInput) {
  case '1': {
    console.log('Вы выбрали Чай');
    break;
  }
  case '2': {
    console.log('Вы выбрали Кофе');
    break;
  }
  case '3': {
    console.log('Вы выбрали Капучино');
    break;
  }
  default: {
    console.log('Вы ввели не верную позицию меню');
  }
}
