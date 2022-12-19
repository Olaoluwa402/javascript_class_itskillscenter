import { xyz, gc } from "./main.js";
import main from "./main.js";
console.log(xyz, gc, "xyz");

console.log(main, "default main");
//functions
//1. declaration funvtion syntax
function name() {
  //code
}
// name(); //function invoked

// const [list, setList] = useState([])
//functionn example
function printFullName() {
  let firstName = "John";
  let lastName = "Doe";
  let space = " ";
  let fullName = `${firstName} ${lastName}`;
  console.log(fullName);
  return fullName;
}
let result = printFullName();
console.log(result);

// normal function with may arguments
function list() {
  console.log(arguments, "list");
}

list(1, 2, 3, 4, 5, ["john"], 5);

// arrow function with may arguments
const arrowList = (...args) => {
  console.log(args, "list");
};

arrowList(1, 2, 3, 4, 5, ["john"], 5);

//anopnymoust expression function
const nameless = function () {
  console.log("am in");
};

//anopnymoust expression arrow function
// const nameless = ()=> {
//     console.log("am in");
//   };
nameless();

//self involked function
console.log(
  (function () {
    // console.log("am in", arguments);
    return arguments;
  })(1, 2, 3, 4, 5)
);

//arrow functions
let arrowList2 = (a, b) => {
  return a * b;
};
arrowList2(2, 3);

//simplified version
let simplifiedArrow = (a) => a * 5;

// functions with default parameter
let defaultParameter = (a = 7, b = 10) => {
  return a * b;
};
console.log(defaultParameter(20), "default");

//scopes 1. window global scope, file global scope, block scopes
windowScoped = 10;
// console.log(window, "window");
let globalScoped = 20;
if (3) {
  let localScoped = 80;
  let globalScoped = 100;
  console.log(windowScoped, globalScoped);
}

const custoObject = {};
console.log(custoObject, "before");
custoObject.list = [1, 2, 3, 4, 5];
custoObject.isLoggedIn = true;

console.log(custoObject, "after");

//objects

const Player = {
  name: "messi",
  club: "Barcelona",
  position: "center forward",
  greet: function () {
    return `Hello ${this.name}`;
  },
  fans: ["hjj", "kjhhk"],
};

console.log(Player.name); //Player['name']
console.log(Player.greet()); //Player['greet']

const input = "name";
console.log(Player[input]);

//object ethods

//1.Object.assign
const copy = Object.assign({}, Player);
console.log(copy);

//2. Object.keys()
console.log(Object.keys(copy));

//3. Object.values()
console.log(Object.values(copy));

//4. Object.entriies()
console.log(Object.entries(copy));
//5. Object.hasOwnProperty
console.log(copy.hasOwnProperty("fans"));
