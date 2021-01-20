'use strict';

// Деструктуризация - особый способ создания переменных

// Деструктуризация объектов
const monitor = {
  sizes: {
    height: {
      value: 20,
      scale: 'cm',
    },
    width: {
      value: 56.5,
      scale: 'cm',
    },
  },
  model: {
    company: 'Samsung',
    type: 'S24SD300M1',
  },
  brightness: 200,
  contrast: 100,
  color: 'black',
  dpi: 250,
  resolution: '4K',
};
// console.log(monitor.sizes.height.value);

// const monitorBright = monitor.brightness;
const { resolution, contrast, model } = monitor;
/* BAD!
const { sizes } = monitor;
const { height, width} = sizes;
const {value} = height */

const {
  sizes: {
    height: { value: heightValue },
    width: { value: widthValue },
  },
} = monitor;

const { color, ...restOfMonitor } = monitor;

// Деструктуризация массивов

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

// const firstNumber = nums[0];
const [firstNumber, , thirdNumber, , fifthNumber, ...restOfNums] = nums;

// Деструктуризация входных параметров

function getFullName({ firstname, lastname }) {
  return `${firstname} ${lastname}`;
}

// getMonitorInfo(monitor){}
function getMonitorInfo({
  color,
  dpi,
  sizes: {
    width: { value: width },
    height: { value: height },
  },
}) {
  return `Color: ${color}, dpi: ${dpi}, width: ${width}, height: ${height}`;
}
