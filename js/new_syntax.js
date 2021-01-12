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

class Worker {
  /**
   *
   * @param {string} name
   * @param {string} surName
   * @param {number} days
   * @param {number} rate
   */
  constructor(name, surName, days = 0, rate = MIN_ZP) {
    if (typeof days !== 'number') {
      throw new TypeError('Parameters have unappropriate type');
    }
    if (days < 0 || days > 31) {
      throw new RangeError();
    }

    this.name = name;
    this.surName = surName;
    this.rate = rate;
    this.days = days;
  }

  set rate(newRate) {
    // setter - специальный метод для присвоения значения
    if (typeof newRate !== 'number') {
      throw new TypeError('Parameter has unappropriate type');
    }
    if (newRate < 0) {
      throw new RangeError();
    }
    this._rate = newRate;
  }

  get rate() {
    // getter - специальный метод для получения значения
    return this._rate;
  }

  getSalary() {
    return this.rate * this.days;
  }
}
const w1 = new Worker('Vlad', 'Testtovich', 5, 1000);

class Fuel {
  constructor(volume, density) {
    this.volume = volume;
    this.density = density;
  }
  getFuelWeight() {
    return this.volume * this.density;
  }
}

class Auto {
  /**
   *
   * @param {string} model
   * @param {number} ownWeight
   * @param {Fuel} fuel
   */
  constructor(model, ownWeight, fuel) {
    this.model = model;
    this.ownWeight = ownWeight;
    this.fuel = fuel;
  }
  getFullWeight() {
    return this.ownWeight + this.fuel.getFuelWeight();
  }
}

class Friend {
  /**
   *
   * @param {string} name
   * @param {number} appleAmount
   * @param {Friend} friend
   */
  constructor(name, appleAmount, friend) {
    this.name = name;
    this.amount = appleAmount;
    this.friend = friend;
  }

  countAllApples() {
    return this.amount + this.friend.amount;
  }
}
