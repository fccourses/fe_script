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
