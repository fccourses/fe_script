class Squirrel {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  eat() {
    return `${this.name} is eating`;
  }
  climb() {
    return `${this.name} is climbing`;
  }
}

class FlyingSquirrel extends Squirrel {
  constructor(name, color, distance) {
    super(name, color);
    this.distance = distance;
  }
  fly() {
    return `${this.name} is flying`;
  }
}

/* 
СказочнаяБелка
песни: string[]

песниПеть() - Логируете все песни по циклу
танцевать() - белка танцет

*/

class FableSquirrel extends FlyingSquirrel {
  constructor(name, color, distance, songs) {
    super(name, color, distance);
    this.songs = songs;
  }
  dance() {
    return `${this.name} is dancing squirrel`;
  }
  sing() {
    return `Эта белка поет такие песни: ${this.songs.join('-')}`
  }
}

const squirrel = new Squirrel('TEst', 'red');
const flyingSquirrel = new FlyingSquirrel('Sq', 'black', 120);

const songs = ['str1', 'str2', 'song3', 'tesat4'];
const fableSquirrel = new FableSquirrel('Pushkin', 'rainbow', 800, songs);
