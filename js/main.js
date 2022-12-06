const { log } = console;

const result = document.getElementById("result");
const btn = document.getElementById("submit");

log(btn);

btn.addEventListener("click", function () {
  const input = document.getElementById("day").value;
  const day = input.toLowerCase();
  log("here");
  log(input);
  switch (day) {
    case "monday":
      // alert("Yes, it is monday");
      result.innerHTML = `<p class=''>Yes, it is a ${input}</>`;
      document.getElementById("day").value = "";
      break;
    case "tuesday":
      result.innerHTML = `<p class=''>Yes, it is a ${input}</>`;
      document.getElementById("day").value = "";
      break;
    case "wednesday":
      result.innerHTML = `<p class=''>Yes, it is a ${input}</>`;
      document.getElementById("day").value = "";
      break;
    case "thursday":
      result.innerHTML = `<p class=''>Yes, it is a ${input}</>`;
      document.getElementById("day").value = "";
      break;
    case "friday":
      result.innerHTML = `<p class=''>Yes, it is a ${input}</>`;
      document.getElementById("day").value = "";
      break;
    case "saturday":
      result.innerHTML = `<p class=''>Yes, it is a ${input}</>`;
      document.getElementById("day").value = "";
      break;
    case "sunday":
      result.innerHTML = `<p class=''>Yes, it is a ${input}</>`;
      document.getElementById("day").value = "";
      break;
    default:
      result.innerHTML = `<p class=''>Not a week day</>`;
      document.getElementById("day").value = "";
  }
});

let xyz = 70;
const res =
  xyz && xyz >= 10 && xyz < 18
    ? "Not Eligible to vote"
    : xyz && xyz >= 18 && xyz <= 60
    ? "Eligible to vote"
    : "You are too old";
log(res);

//if
// const user = await User.find();
// let age = 15;
// if (age <= 15) {
//   console.log("you are too young to vote");
// } else if (age > 15 && age <= 60) {
//   console.log("you are to eligible to vote");
// } else {
//   console.log("you are too old to vote");
// }

const name = "john";
const age = "";
const country = "togo";

let list = [
  { name: "john", age: 15, country: "Nigeria" },
  { name: "john", age: 60, country: "Nigeria" },
  { name: "jane", age: 60, country: "Nigeria" },
  { name: "jacob", age: 30, country: "Togo" },
  { name: "james", age: 20, country: "England" },
  { name: "john", age: 60, country: "Togo" },
  { name: "john", age: 45, country: "Togo" },
];

if (name) {
  list = list.filter((item) => item.name.toLowerCase() === name.toLowerCase());
}

if (age) {
  list = list.filter((item) => item.age == age);
}

if (country) {
  list = list.filter(
    (item) => item.country.toLowerCase() === country.toLowerCase()
  );
}

console.log(list);

// const h2 = document.getElementById("header"); //get element by id
// const btn = document.querySelectorAll(".btn");
// log(btn);
// log(h2);
// h2.style.backgroundColor = "blue";
// btn[0].style.padding = "10px 20px";
// btn[0].style.borderRadius = "20px";

// for (let i = 0; i < btn.length; i++) {
//   log(btn[i]);
//   btn[i].addEventListener(
//     "click",
//     () =>
//       (btn[i].innerHTML = `<div>
//      <h2>Hello</h2>
//   </div>`)
//   );
// }

// btn.forEach((element) => {
//   log(element, "eleent");
// });
// alert("HEllo 3");
let a = {};
console.log(typeof a);

var b = 12;

var b = 20;

let c = 20;
c = 30;

//    const d = 20
//         d =10

// const country = ["Nigeria", "Ghana"];

// const result = `The nae of my country is ${country[0]}`;

// const quote = "He said and  i quote, 'I amm the best' ";

// log(result);

// const list = "Nigeria, Niger, Ghana, Togo, Germany";

// const arr = list.split();
// log(arr);

const g = 20;
const h = "20";

log(g == h);

function ab(x) {
  if (NaN) {
    console.log("true");
  }
}

ab();
