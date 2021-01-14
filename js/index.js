/* 

1. string - ''
2. number - NaN, numebers, Infiniti, - Infinity, -0, +0
3. bool - true, false
4. symbol - ???
5. undefined - undefined
6. null - null
7. BigInt - 100n

8. Object - {*}

*/

const mySymbol = Symbol('Symbol.Important');
const mySymbol2 = Symbol('Просто метка для людей.');

const object = {
  login: 'Vasy12345',
  test: 'wrong way',
  [mySymbol]: 100,
};
