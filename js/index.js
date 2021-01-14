const arr = [1, 2, 3, 4, 5, 6];

for (const number of arr) {
  console.log(number);
}

console.log(...arr);

const myArr = new MyArray(1, 2, 3, 4, 5, 6, 7, 8, 9);


/* 
Недоступно:

console.log(...myArr);

for (const num of myArr) {
  console.log(num);
} */
