//success promise

const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const items = ["item1", "item2", "item3"];
    if (items.length > 0) {
      resolve(items);
    } else {
      reject("Something went wrong");
    }
  }, 2000);
})
  .then((items) => console.log(items, "items 2nd"))
  .catch((err) => console.log(err, "err 2nd"));

// console.log(doPromise, "doPromise");

//failure promise

const doPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const items = [];
    if (items.length > 0) {
      resolve(items);
    } else {
      reject("Something went wrong");
    }
  }, 5000);
})
  .then((items) => console.log(items, "items 3rd"))
  .catch((err) => console.log(err, "err 3rd"));

//promise
const doPromise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const items = [];
    if (items.length > 0) {
      resolve(items);
    } else {
      reject("Something went wrong");
    }
  }, 10000);
});

//proise handling with async await
const testAsysncAwait = async () => {
  try {
    const res = await doPromise3;
    console.log(res, "resAsync 4th");
  } catch (err) {
    console.log(err, "errAsync 4th");
  }
};

testAsysncAwait();

const b = 10;
console.log(b, "b first");

//closure
const c = 12;
const closure = () => {
  const d = c * 2;
  function name() {
    const e = d * 3;
    return e;
  }
  return name;
};
