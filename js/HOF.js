//timers in js - HOigher oredr functions
const callback = () => {
  console.log("Hello");
  return "Hello";
};
// setInterval(callback, 3000);
// setTimeout(callback, 3000);

//inbuit js methods
const list = [
  { id: "1", name: "product_1", price: 200 },
  { id: "2", name: 2, price: 300 },
  { id: "3", name: "product_3", price: 100 },
  { id: "4", name: "product_4", price: 350 },
  { id: "5", name: "product_5", price: 250 },
];

//1.forEach
list.forEach((list) => {
  //   console.log(list.price);
});

//2. map
const sum = list
  .map((listItem, i) => listItem.price)
  .reduce((acc, curr) => acc + curr, 0);
// console.log(sum, "prices");

//filter
const filteredList = list.filter((listItem) => {
  listItem.price > 200;
});
// console.log(filteredList);

function removed(id) {
  return list.filter((listItem, i) => listItem.id != id);
}

console.log(removed(5));
console.log(list, "list");

//.every
const everyResult = list.every((list) => typeof list.name === "string");
console.log(everyResult, "every");

//.some
const someResult = list.some((list) => typeof list.name === "number");
console.log(someResult, "some");

//.find
const findResult = list.find((list) => list.id == "5");
console.log(findResult, "find");
