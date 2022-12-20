const { log } = console;
//twwo ways to declare a regular expression
//1. regex constructor

const data =
  "Lorem ipsum dolor sit spa amet consectetur spam adipisicing elit. Explicabo, dolor.";
const reg = "D";
const flag = "igm";
const pattarn_1 = new RegExp(reg, flag);
log(pattarn_1, "pattarn_1");

//2. two forward slashes

const pattarn_2 = /dolor/gim;

//search using test()
const result = pattarn_1.test(data);
log(result, "result");

//search using match()
const result_2 = data.match(pattarn_2);
log(result_2, "result_2");
