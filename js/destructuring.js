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

const jhjk = [
  { name: "John", id: 1 },
  { name: "John", id: 1 },
  { name: "John", id: 1 },
];

const countries = [
  ["Finland", "Helsinki"],
  ["Nigeria", "Abuja"],
];

for (const [a, b] of countries) {
  console.log(a, b, "country");
}

//object destructuring
const dimemsion = {
  width: 20,
  height: 50,
  area: 200,
  perimeter: 4000,
};

const dimemsion_2 = {
  width: 2000,
  height: 5000,
  area: 200,
  perimeter: 4000,
};

const { width, height, perimeter = 0 } = dimemsion;

const { width: width_2, height: height_2 } = dimemsion_2;
log(width, width_2, height, height_2, perimeter, "dimemsiion");

function calculatePerimeter({ width, height }) {
  const result = 2 * width * height;
  return result;
}
log(calculatePerimeter(dimemsion), "calPerieter");

//copy from an array using spread operator(...)
const original = [1, 2, 3, 4, 5];
const copy = [...original];
log(copy, "arraycopy");

const copiedDimension_2 = { ...dimemsion_2, height: 3500 };
log(copiedDimension_2, "copiedDimension_2");
