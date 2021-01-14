class Friend {
  /**
   *
   * @param {number} count
   * @param {Friend[]} friends
   */
  constructor(count = 0, friends = []) {
    this.count = count;
    this.friends = friends;
  }

  getCount() {
    if (this.friends.length) {
      return this.friends.reduce(
        (result, friend) => result + friend.getCount(),
        this.count
      );
    }
    return this.count; // basic.
  }
}

const friend = new Friend(1);
