class MyArray {
  constructor() {
    this.length = 0;
    for (let i = 0; i < arguments.length; i++) {
      this.push(arguments[i]);
    }
  }
  push() {
    /* Обходим список аргументов до тех пор, пока у него есть аргументы */
    for (let i = 0; i < arguments.length; i++) {
      this[this.length++] = arguments[i];
    }
    return this.length;
  }

  pop() {
    if (this.length === 0) {
      return;
    }
    const lastItem = this[this.length - 1];
    delete this[--this.length];
    return lastItem;
  }

  map(cb) {
    const result = new MyArray();

    for (let i = 0; i < this.length; i++) {
      const cbResult = cb(this[i], i, this);
      result.push(cbResult);
    }

    return result;
  }

  concat(myArrInstance) {
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
  }

  reverse() {
    const copy = Object.assign(new MyArray(), this);

    for (let i = 2; i < this.length; i++) {
      this[i] = copy.pop();
    }

    return this;
  }

  forEach(func) {
    for (let i = 0; i < this.length; i++) {
      func(this[i], i, this);
    }
  }

  some(func) {
    for (let i = 0; i < this.length; i++) {
      if (func(this[i], i, this)) {
        return true;
      }
    }
    return false;
  }

  every(func) {
    for (let i = 0; i < this.length; i++) {
      if (!func(this[i], i, this)) {
        return false;
      }
    }
    return true;
  }

  filter(checkFunction) {
    const result = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (checkFunction(this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  }

  flat(depth = 1) {
    let result = new MyArray();

    /*  for (let i = 0; i < this.length; i++) {
      if (MyArray.isMyArray(this[i]) && depth) {
        result = result.concat(this[i].flat(depth - 1));
      } else if (this[i] !== undefined) {
        result.push(this[i]);
      }
    } */

    this.forEach((item) => {
      if (MyArray.isMyArray(item) && depth) {
        result = result.concat(item.flat(depth - 1));
      } else if (item !== undefined) {
        result.push(item);
      }
    });

    return result;
  }

  static isMyArray(obj) {
    return obj instanceof MyArray;
  }
}

const arr2 = new MyArray(0, undefined, new MyArray(1, 1, new MyArray(2, 2), 1));
