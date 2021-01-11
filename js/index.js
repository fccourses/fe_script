'use strict';

/**
 * 
 * @param {*} num 
 * @param {*} exp 
 * @throws {TypeError}
 * @throws {RangeError}
 */
const pow = (num, exp) => {
  if (typeof num !== 'number' || typeof exp !== 'number') {
    throw new TypeError();
  }

  if (exp <= 0) {
    throw new RangeError('exp must be a positive number');
  }

  if (exp === 1) {
    return num;
  }
  return pow(num, exp - 1) * num;
};

console.log(pow(2, -5));

console.log('copntinue');
