'use strict';

const car = {
  go() {
    return `${this.name} сейчас за рулём!`;
  },
};

const driver1 = {
  name: 'Test Testovich',
};
const driver2 = {
  name: 'Tesan Tesovich',
};

driver1.__proto__ = car;
driver2.__proto__ = car;
