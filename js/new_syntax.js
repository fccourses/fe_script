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

/*
Auto
  Собственный вес (ownWeight)
  fuel
  getFullWeight()

Fuel 
  volume
  density
  getFuelWeight()
*/

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

const benzin = new Fuel(50, 0.9);
const vw = new Auto('passat', 1200, benzin);
