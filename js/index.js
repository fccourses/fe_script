class User {
  constructor(name, surname, age, isBanned) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.isBanned = isBanned;
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

/* Admin -  у него есть всё, что у User
    ban(user);
*/

class Admin extends User {
  constructor(name, surname, age, email) {
    super(name, surname, age, false);
    this.email = email;
  }

  ban(user) {
    user.isBanned = true;
  }

  unBan(user) {
    user.isBanned = false;
  }

  toggleBan(user) {
    if (user instanceof User) {
      user.isBanned = !user.isBanned;
      return;
    }
    throw new TypeError();
  }
}
const u = new User();
const a = new Admin();
