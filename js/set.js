const { log } = console;
//1. instantiate a new set class
const newSet = new Set();
log(newSet, "newSet");

//2. get unique values from array
const list = [12, 3, 4, 51, 2, 3, 4, 5];
const newUnique = new Set(list);
log(newUnique, "newSet");

//3. get the size of a set collection
const size = newUnique.size;
log(size, "size");

//4.iterate over a set
for (let item of newUnique) {
  log(item, "item");
}

//.5 add an eleent to set collection
const newItem = new Set();
newItem.add("Nigeria");
newItem.add("Togo");
newItem.add("Germany");
newItem.add("Spain");

log(newItem, "newItem - before iteration");

for (let item of list) {
  newItem.add(item);
}

log(newItem, "newItem - after iteration");

//.5 delete collection
newItem.delete("Nigeria");
log(newItem, "newItem - after delete");

//7. check for presence of an item using has
for (let item of list) {
  log(newItem.has(item), "has");
}

//8. clearing a set
newItem.clear();
log(newItem, "newItem - after clear");

//9. union of set
const A = [1, 2, 3, 4];
const B = [3, 4, 5, 6];
const C = [...A, ...B];

const union = new Set(C);
log(union, "union");

const BSet = new Set(B);
//10. intersect
const intersect = A.filter((item) => BSet.has(item));
log(intersect, "interset");

//1. difference
const difference = A.filter((item) => !BSet.has(item));
log(difference, "difference");
