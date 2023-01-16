//console.log('Hello')
console.log("Hello");
//warning
console.warn("This will not e supported in the future");
console.error("This is not longer valid");

const dataaa = [1, 2, 3, 4, 5, 6, 7, 88, 910];
console.table(dataaa);

//console timer
// console.time("start");
// for (let i = 0; i < 10000; i++) {
//   //   console.log(i);
// }
// console.timeEnd("start");

console.assert(4 > 3, "$ is truly greater than 3"); //This does nothing since t's true
console.assert(3 > 3, "This s not true"); // this throws an assertion error

// console.clear();

try {
  //   console.log(name);
  //   const name = "John";
  const emailExist = true;

  if (emailExist) {
    throw new Error("Sorry, User is already registered");
  }
  console.log("JONHM");
} catch (error) {
  console.log(error);
  if (error.message.includes("jwt")) {
  }
}
