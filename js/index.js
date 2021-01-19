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
