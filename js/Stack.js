class Stack {
  constructor(maxSize = 10, ...array) {
    this._maxSize = maxSize;
    this._size = 0;

    for (const item of array) {
      this.push(item);
    }
  }

  get isEmpty() {
    return this._size === 0;
  }

  get size() {
    return this._size;
  }

  push(value) {
    if (this.size >= this._maxSize) {
      throw new RangeError('Stack overflow');
    }
    this[`_${this.size}`] = value;
    this._size++;
    return this.size;
  }

  pop() {
    if (this.size <= 0) {
      return;
    }
    const lastItem = this[`_${this.size - 1}`];
    delete this[`_${this.size - 1}`];
    this._size--;
    return lastItem;
  }

  pick() {
    return this[`_${this.size - 1}`];
  }
}

const newStack = new Stack(5, 12, 13, 14, 15);

const checkSequence = (str) => {
  const stack = new Stack();

  for (const symbol of str) {
  }

  return stack.isEmpty;
};
