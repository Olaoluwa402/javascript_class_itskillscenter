//classes syntax
const { log } = console;
class Player {
  constructor(name, age, friends) {
    this.name = name;
    this.age = age;
    this.club = "Chelsea";
    this.friends = friends;
    this.bio = function () {
      return `This is ${this.name}, is am a ${this.club} player. `;
    };
  }

  get getAgeCLub() {
    return { name: this.name, club: this.club };
  }

  set setFriends(friend) {
    return this.friends.push(friend);
  }

  get getFriends() {
    return this.friends;
  }
}

const Messi = new Player("Messi", "38", ["John", "James"]);
log(Messi.getAgeCLub, "gettter");
Messi.setFriends = "Bamidele";
log(Messi.getFriends, "friends");
