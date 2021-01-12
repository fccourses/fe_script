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
