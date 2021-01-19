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

const options = {
  braces: {
    '(': ')',
    '{': '}',
    '[': ']',
  },
  isStrict: false,
};

const checkSequence = (str, options) => {
  const stack = new Stack();
  const braces = options.braces;
  const closeBraces = Object.values(braces);

  for (const symbol of str) {
    /* 1. Определить открывающаяся скобка. Запушить в стек. */
    if (braces[symbol]) {
      stack.push(symbol);
      continue;
    }
    /* 2. Определить пуст ли стек. Вернуть false. */
    if (closeBraces.includes(symbol) && stack.isEmpty) {
      return false;
    }
    /* 3. Определяет закрывающаююся скобку и её тип. Удаляет из стека */
    /* 
    3.1 В стеке лежат открывающиеся скобки. Стек НЕ пуст.
    3.2 Текущий обрабатываемый элемент должен быть закрывающейся скобкой того же типа.
    3.3 В стеке всегда лежат открывающиеся скобки.
     Ключи в объекте braces тоже открывающиеся скобки.
     */
    const lastItemFromStack = stack.pick(); // взяли открывающую
    const correctCloseBrace = braces[lastItemFromStack];
    if (symbol === correctCloseBrace) {
      stack.pop();
    } else if (braces[symbol] || closeBraces.includes(symbol)) {
      return false;
    }
  }

  return stack.isEmpty;
};

// checkSequence('()', options);
