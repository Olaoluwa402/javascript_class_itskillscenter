const { log } = console;
//1. instantiate a new set class
const newMap = new Map();
log(newMap, "newMap");

//2.pass array into map
const list = [
  ["Ondo", "Akure"],
  ["Oyo", "Ibadan"],
  ["Osun", "Osogbo"],
];
const newUnique = new Map(list);
log(newUnique, "arryaList");

//3. iterating over a map list
for (let state of newUnique) {
  console.log(state);
}

const players = [
  ["Messi", "Bacelona"],
  ["Matinez", "Arsenal"],
  ["Ronaldo", "Man.U"],
];
//4. add items into the list
for (let player of players) {
  newUnique.set(...player); //newUnique.set(...player)
}
console.log(newUnique, "Players");

//5.has ion map
const hasMap = newUnique.has("Nigeria");
log(hasMap, "hasMap");
//5.has ion map
const getAp = newUnique.get("Messi");
log(getAp, "hasMap");

const user = {
  name: "john",
};

const listt = [
  { id: 4, name: "john" },
  { id: 1, name: "Dayo" },
  { id: 6, name: "Bayo" },
  { id: 5, name: "Chima" },
];

const result = listt.sort();
console.log(result);
