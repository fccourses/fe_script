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
*/

/*
 compare('test', 'sett'); // true
 compare('love', 'evol'); // true

 compare('test', 'lore'); // false
 compare('Mom', 'Omo'); // false 
 compare('bed','bedbed'); // false

 compare('abc', 'cba') // true
 compare('rfv','qwe') // false

*/
