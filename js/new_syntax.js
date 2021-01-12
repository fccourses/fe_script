const MIN_ZP = 6000 / 21;

class User {
  constructor(name, surName, age) {
    this.name = name;
    this.surName = surName;
    this.age = age;
  }

  getFullName() {
    return `${this.name} ${this.surName}`;
  }

  isAdult() {
    return this.age >= 18;
  }
}


/* 
  Реализовать класс Рабочий (Worker)
  У рабочего есть имя, фамилия, ставка за день,
  кол-во отработанных дней.
  Метод, который будет возвращать з\п работника
*/

class Worker {
  constructor(name, surName, days = 0, rate = MIN_ZP) {
    this.name = name;
    this.surName = surName;
    this.rate = rate;
    this.days = days;
  }

  getSalary() {
    return this.rate * this.days;
  }
}

const systemAdmin = new Worker('Petro', 'Testovich', 10, 800);
