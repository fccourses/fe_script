'use strict';
function getFullName() {
  return `${this.firstName} ${this.lastName}`;
}
function User(
  first,
  last,
  age,
  email,
  isMale,
  isSubscribed = false,
  nationality
) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.email = email;
  this.isMale = isMale;
  this.isSubscribed = isSubscribed;
  this.nationality = nationality;
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
      Math.random() > 0.5, //isMale
      Math.random() > 0.5, // isSubscribed
      getRandomNationality() //nationality
    );
    db.push(user);
  }
  return db;
}
function getRandomNationality() {
  const max = NATIONALITIES.length - 1;
  const min = 0;

  return NATIONALITIES[Math.round(Math.random() * (max - min) + min)];
}
const users = createRandomUsers(100);
// console.table(users);

/* Получить массив полных имён с помощью метода map */
const names = users.map(function (user) {
  return user.getFullName();
});
/* Получить массив совершеннолетних пользователей */
const adultUsers = users.filter(function (user) {
  return user.age >= ADULT_AGE;
});
// console.table(adultUsers);
/*
1.1 Зарандомить подписки у пользователей.
1.2 Получить массив только подписанных совершеннолетних 
пользователей женского пола. 
1.3 1.2 но только почты
*/

const adultWoman = users.filter(function (user) {
  return user.age >= ADULT_AGE && !user.isMale;
});

const mails = adultWoman.map(function (user) {
  return user.email;
});

//ladder.up().up().up();

const emails = users
  .filter(function (user) {
    return user.age >= ADULT_AGE && !user.isMale;
  })
  .map(function (user) {
    return user.email;
  });
