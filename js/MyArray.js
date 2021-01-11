/* Объект с логикой */
function MyArrayProto() {
  this.push = function push() {
    /* Обходим список аргументов до тех пор, пока у него есть аргументы */
    for (let i = 0; i < arguments.length; i++) {
      this[this.length++] = arguments[i];
    }
    return this.length;
  };

  this.pop = function () {
    if (this.length === 0) {
      return;
    }
    const lastItem = this[this.length - 1];
    delete this[--this.length];
    return lastItem;
  };

  this.map = function (cb) {
    const result = new MyArray();

    for (let i = 0; i < this.length; i++) {
      const cbResult = cb(this[i], i, this);
      result.push(cbResult);
    }

    return result;
  };

  this.concat = function (myArrInstance) {
    const result = new MyArray();

    if (!MyArray.isMyArray(myArrInstance)) {
      for (let i = 0; i < this.length; i++) {
        result.push(this[i]);
      }
      result.push(myArrInstance);
      return result;
    }

    for (let i = 0; i < this.length; i++) {
      result.push(this[i]);
    }

    for (let i = 0; i < myArrInstance.length; i++) {
      result.push(myArrInstance[i]);
    }

    return result;
  };

  this.reverse = function () {
    const copy = Object.assign(new MyArray(), this);

    for (let i = 2; i < this.length; i++) {
      this[i] = copy.pop();
    }

    return this;
  };

  this.forEach = function forEach(func) {
    for (let i = 0; i < this.length; i++) {
      func(this[i], i, this);
    }
  };

  this.some = function some(func) {
    for (let i = 0; i < this.length; i++) {
      if (func(this[i], i, this)) {
        return true;
      }
    }
    return false;
  };

  this.every = function every(func) {
    for (let i = 0; i < this.length; i++) {
      if (!func(this[i], i, this)) {
        return false;
      }
    }
    return true;
  };

  this.filter = function filter(checkFunction) {
    const result = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (checkFunction(this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  };
}

/* Объекты с данными */
function MyArray(...args) {
  this.length = 0;

  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
}

MyArray.isMyArray = function isMyArray(obj) {
  return obj instanceof MyArray;
};

/* Создаём прототип(связь между объектами). Наследование */
MyArray.prototype = new MyArrayProto();

const myArr = new MyArray(
  { age: 18, name: 'test' },
  { age: 21, name: 'test 2' }
);
