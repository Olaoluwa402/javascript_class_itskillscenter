const { log } = console;
const list = [1, 2, 3, 4, 5, 6, 7, 8];
const objectData = {
  friends: ["John", "Yemi", "Ngozi"],
  name: "John",
  favoriteColor: "Blue",
};
//array destructuring and rest combination
const [first, , third, ...chima] = list;
log(first, third, chima, "first");

//object destructuring and rest combination
const { friends, name, ...rest } = objectData;
log(friends, name, rest, "objectFirst");
