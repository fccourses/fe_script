const nums = [
  123,
  4,
  1,
  563,
  1234,
  457,
  344657,
  58,
  678,
  456,
  657,
  34,
  68766,
  3,
  34463,
];

const sortedNums = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25];

const numGuesser = () => {
  // O(log n)

  let start = 0;
  let end = 100;
  let middle = Math.round((start + end) / 2);

  while (true) {
    if (confirm(`${middle} ?`)) {
      return middle;
    }
    if (confirm(`${middle} > num  ?`)) {
      end = middle;
      middle = Math.ceil((end + start) / 2);
    } else {
      start = middle;
      middle = Math.floor((end + start) / 2);
    }
  }
};

const linearSearch = (arr, value) => {
  // O(n) - линейная
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }

  return -1;
};

const createMultiplicationtable = (limit) => {
  // O(n^2) - квадратичная
  const table = [];
  for (let i = 1; i < limit; i++) {
    for (let j = 1; j < limit; j++) {
      table.push(`${i}*${j} = ${i * j}`);
    }
  }
  return table;
};
