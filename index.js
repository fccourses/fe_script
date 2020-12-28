'use strict';

const user = {
  firstName: 'Test',
  lastName: 'Testovich',
  age: 18,
  isMale: true,
};

function sayHello(userObject) {
  return `Hello, ${userObject.firstName} ${userObject.lastName} !!`;
}

/* Создать функцию createQuery, которая возвращает валидный url */

const PROTOCOL = 'http://';
const SERVER_IP = 'google.com';

function createQuery(absPath) {
  return `${PROTOCOL}${SERVER_IP}${absPath}`;
}

createQuery('/pages/index.html');