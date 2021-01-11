'use strict';

function toUpperCase(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    result += str[i].toUpperCase();
  }

  return result;
}

function toJadenCase(str) {
  return str
    .split(' ')
    .map((w) => {
      if (w) {
        return w[0].toUpperCase() + w.substring(1);
      }
    })
    .join(' ');
}

/*
Нужно написать функцию, принимающую строку
в качестве аргумента
щающую количество гласных,
которые содержатся в строке.
Вернуть кол-во гласных.
Гласными являются "a", "e", "i", "o", "u".
Верхний регистр тоже считать.
*/

const countVowels = (string) =>
  string
    .toLowerCase()
    .split('')
    .filter((letter) => ['a', 'e', 'i', 'o', 'u'].includes(letter)).length;
