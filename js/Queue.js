class Queue {
  constructor() {
    this._head = 0;
    this._tail = 0;
  }

  get size() {
    return this._tail - this._head;
  }

  push(value) {
    this[this._tail] = value;
    this._tail++;
    return this.size;
  }

  pop() {
    if (this.size) {
      const lastItem = this[this._head];
      delete this[this._head++];
      return lastItem;
    }
  }
}

const q = new Queue();
