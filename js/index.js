/*  
  1. Инкапсуляция +
  2. Наследование +
  3. Полиморфизм +
*/

function getFigureArea(figure) {
  if (figure instanceof Figure) {
    return figure.getArea();
  }
  throw new TypeError();
}

class Figure {
  constructor(name) {
    this.name = name;
  }
  getArea() {}
}

class Circle extends Figure {
  constructor(radius) {
    super('Circle');
    this._radius = radius;
  }

  getArea() {
    return this._radius * Math.PI * this._radius;
  }
}

class Triangle extends Figure {
  constructor(a, b, angle) {
    super('Triangle');
    this._a = a;
    this._b = b;
    this._angle = angle;
  }
  getArea() {
    // override; переопределили метод getArea
    return this._a * this._b * Math.sin(this._angle * (180 / Math.PI));
  }
}

class Square extends Figure {
  constructor(a) {
    super('Square');
    this.a = a;
  }

  getArea() {
    // override; переопределили метод getArea
    return this.a * this.a;
  }
}

const t = new Triangle(10, 12, 60);
const s = new Square(15);
