'use strict';
function getFullName() {
  return `${this.firstName} ${this.lastName}`;
}
function User(first, last, age, email, isMale, isSubscribed = false) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.email = email;
  this.isMale = isMale;
  this.isSubscribed = isSubscribed;
  this.getFullName = getFullName;
}
function createRandomUsers(amount = 1) {
  const db = [];
  for (let i = 0; i < amount; i++) {
    const user = new User(
      `Name${i}`, // first name
      `Surname${i}`, //last name
      Math.ceil(Math.random() * 100), //age
      `email${i}@mail.com`, //email
      Math.random() > 0.5 //isMale
    );
    db.push(user);
  }
  return db;
}
const users = createRandomUsers(100);
console.table(users);

/* Получить массив полных имён с помощью метода map */
/* ПОлучить массив совершеннолетних пользователей */
