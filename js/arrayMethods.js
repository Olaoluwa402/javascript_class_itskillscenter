//Array methods
//1. Array fill

//innitaite an array of 5 empty list
const arr = new Array(5);
console.log(arr);

//then use fill method to present some data
const fillArray = new Array(5).fill(0);
console.log(fillArray);

// concatenation
const toBeConcatenated_1 = [1, 2, 3, 4, 5];
const toBeConcatenated_2 = [6, 7, 8, 9, 10];

//note order is preserved
const result = toBeConcatenated_2.concat(toBeConcatenated_1);
console.log(result);

//array length

const arrLength = new Array(20).fill("$");
const len = arrLength.length;
console.log(len);

//indexOf (picks the first occurence) and lastIndexOf(picks the last occurence)
const arrIndexOf = [1, 2, "John", {}, 1, []];
console.log(arrIndexOf.indexOf(2));
console.log(arrIndexOf.lastIndexOf(1));

//example
const searchTeam = "";
const fruits = ["mango", "orange", "banana", "apple", { title: "" }];
//get the index fro the array
const index = fruits.indexOf(searchTeam);
console.log(index);
if (index === -1) {
  console.log("Item not found");
} else {
  console.log(`Your item by name ${searchTeam} is available`);
}

//other way using ternary
const ab =
  index === -1
    ? '"Item not found"'
    : `Your item by name ${searchTeam} is available`;
console.log(ab, "index");
const abc = fruits[4].title ? fruits[4].title : "";
console.log(abc);

//includes => returns true or false
const sear = "cars";
const includeArray = {
  cars: ["toyota", "benz", "mazda", "bmw", "lexus"],
  fruits: ["toyota", "benz", "mazda", "bmw", "lexus"],
};

const found = includeArray[sear].includes("toyota");
console.log(found, "cars");

//Array.isArray => return true or false

console.log(Array.isArray(includeArray.cars), "isArray");

//toString method

const toStr = [1, 2, 3, 4, 5];
const convertedStr = toStr.toString();
console.log(convertedStr, "toString");

//join method
const joinArr = ["I", "am", "coming", "today"];

const resultJoin = joinArr.join(".");
console.log(resultJoin, "join");

//slice ad splice
let numbers = [2, 3, 4, 5, 7, 1];
`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    `;
const resNum = numbers.splice(1, 3, 9, 9, 9);
console.log(numbers, "numbers");
console.log(resNum, "resNum");

//push
let data = [2, 3, 4, 5, 7, 1];

console.log(data, "before");
data.push(20);
console.log(data, "after");

//pop
console.log(data, "pop_before");
data.pop();
console.log(data, "pop_after");

//shift
console.log(data, "shift_before");
data.shift();
console.log(data, "shift_after");

//unshift
console.log(data, "unshift_before");
data.unshift(30);
console.log(data, "unshift_after");

//reverse
console.log(data, "reverse_before");
data.reverse();
console.log(data, "reverse_after");

//sort()
const list = ["j", "b", "k", "a", "A", "c"];
// const newList = list.join().toLowerCase().split(",");
// console.log(newList, "newList");
console.log(list, "sort_before");
list.sort().reverse();
console.log(list, "sort_after");

const nums = [1, 3, 1, 6, 4, 50, 7, 13, 11];

// const newList = list.join().toLowerCase().split(",");
// console.log(newList, "newList");
console.log(nums, "sort_before");
//ascending
nums.sort((a, b) => a - b);
console.log(nums, "sort_after");

//arrayOfarrays
const ad = [
  [1, 2, 3, ["john", "joe"]],
  [1, 7, 6, ["dan", "joy"]],
]; //two dimensional
// const newList = list.join().toLowerCase().split(",");
// console.log(newList, "newList");
console.log(ad[1][2], "get 6");
console.log(ad[0][3][1], "get joe");

let final = [];
for (let i = 0; i < ad.length; i++) {
  const bnb = ad[i];
  for (let j = 0; j < bnb.length; j++) {
    const alt = bnb[j];
    // console.log(alt, "alt");
    if (Array.isArray(alt)) {
      for (let r = 0; r < alt.length; r++) {
        final.push(alt[r].toUpperCase());
      }
    }
  }
  console.log(bnb);
}

console.log(final, "nestedForloop");

//while loop
let i = 0; //count initiation
while (i < 5) {
  console.log(`${i} < 5`);
  i++;
}

//do while loop
let j = 0; //count initiation
do {
  console.log(`${j} < 5, do while loop`);
  j++;
} while (j < 5);

console.log(window.windowScoped, "fromm arryaMethod");
//for of loop
const items = [1, 2, 3, 4, 5, 6];
for (let item of items) {
  console.log(`${item} - for of loop`);
}
