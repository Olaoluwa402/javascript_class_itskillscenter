//classes syntax
const { log } = console;
class Player {
  constructor(name, age, friends) {
    this.name = name;
    this.age = age;
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

Player.prototype.club = "Chelsea";
Player.prototype.manager = "Conte";

// Player.prototype = {
//   constructor: Player,
//   club: "Chelsea",
//   manager: "Conte",
// };

const Messi = new Player("Messi", "38", ["John", "James"]);
const Ronaldo = new Player("Ronaldo", "38", ["John", "James"]);
log(Messi.club, "Messi");
log(Ronaldo.club, "Ronaldo");
log(Messi.getAgeCLub, "gettter");
Messi.setFriends = "Bamidele";
log(Messi.getFriends, "friends");

const John = {
  name: "John",
  age: 12,
  club: "Chelsea",
  friends: [],
  bio: function () {
    return `This is ${this.name}, is am a ${this.club} player. `;
  },
};
log(John, "John");

//instanceof returns a boolean
log(Messi instanceof Player, "Instance of Messi");
log(John instanceof Player, "Instance of John");

//inheritance

//Let's create a child class called ChildClass and extend it to a parent class called ParentClass

class ParentClass {
  constructor(clubName, location) {
    this.clubName = clubName;
    this.location = location;
  }
}
ParentClass.prototype.NoOfStartingPlayers = 11;

const Chelsea = new ParentClass("chelsea", "London");
log(Chelsea, "Club");

class ChildClass extends ParentClass {
  constructor(clubName, location, name) {
    log(name, "Name");
    super(clubName, location);
    this.playerName = name;
  }
}

const Terry = new ChildClass("Chelsea", "London", "Terry");
log(Terry, "Terry");
