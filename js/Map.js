'use strict';

const vocabulary = new Map();
vocabulary.set('cat', 'кот');
vocabulary.set('dog', 'собака');
vocabulary.set('table', 'стол');
vocabulary.set('structure', 'структура');
vocabulary.set('algorithm', 'алгоритм');
vocabulary.set('count', 'считать');
vocabulary.set('set', 'установить');
vocabulary.set('kernel', 'ядро');
vocabulary.set('screen', 'экран');
vocabulary.set('bite', 'кусать');
vocabulary.set('cucumber', 'огурец');
vocabulary.set('queue', 'очередь');

const userInput =
  'Cat bite dog Set cucuMber test kernel QuEue Algorithm table screen';

const translate = (str, separator = ' ') => {
  return str
    .toLowerCase()
    .split(separator)
    .map((word) => (vocabulary.has(word) ? vocabulary.get(word) : word))
    .join(separator);
};

const user1 = {
  id: 1,
  name: 'John',
  age: 18,
};
const user2 = {
  id: 2,
  name: 'Jane',
  age: 24,
};

const johnMsgs = ['2134', 'wsefsef', 'sefsdfsdfsef'];
const janeMsgs = ['werfsg', 'sdfsdf', 'sdfsdfs', 'sdfsdfsd'];

const msgsToUsers = new Map();
msgsToUsers.set(user1.id, johnMsgs);
msgsToUsers.set(user2.id, janeMsgs);

const getUserMsgs = (userId) => msgsToUsers.get(userId);

//===================================
const engWordsArray = [];
for (const item of vocabulary.keys()) {
  engWordsArray.push(item);
}
//=====
const rusWordsArray = [];
for (const item of vocabulary.values()) {
  rusWordsArray.push(item);
}
//====================================

const engWords = [...vocabulary.keys()];
const rusWords = [...vocabulary.values()];

/* 
  Напишите функцию, которая проверяет,
 может ли строка быть воссоздана с
 использованием символов другой строки.
 Первый параметр функции - создаваемая строка.
 Второй параметр - используемая строка.
 Функция возвращает Boolean.
 
  1. Создаёте словарь: 
    буква -ключ,
    кол-во этих букв в строке - значение.
  2.Таких словарей 2.
  3. Сравнить размер словарей.
  4. Сравнить содержание этих словарей.

 compare('test', 'sett'); // true
 compare('love', 'evol'); // true

 compare('test', 'lore'); // false
 compare('Mom', 'Omo'); // false 
 compare('bed','bedbed'); // false

 compare('abc', 'cba') // true
 compare('rfv','qwe') // false

*/

const createVocabulary = (str) => {
  const mapToStr = new Map();
  for (const letter of str) {
    if (mapToStr.has(letter)) {
      const letterCount = mapToStr.get(letter);
      mapToStr.set(letter, letterCount + 1);
      continue;
    }
    mapToStr.set(letter, 1); // первый раз когда мы встретили букву
  }
  return mapToStr;
};

const compare = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  const mapToStr1 = createVocabulary(str1);
  const mapToStr2 = createVocabulary(str2);
  if (mapToStr1.size !== mapToStr2.size) {
    return false;
  }
  for (const key of mapToStr1.keys()) {
    if (mapToStr1.get(key) !== mapToStr2.get(key)) {
      return false;
    }
  }
  return true;
};
