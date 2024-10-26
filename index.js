console.log("Here is JavaScript Code: ");

let text = "The Quick Brown Fox Jumps Over The Lazy Dog.";
console.log(text);

let dataTypes = {
  null: null,
  true: true,
  number: 123,
  false: false,
  undefined: undefined,
  string: "text string",
  symbol: Symbol("This is symbol"),
};
// let a = Array.from(dataTypes).forEach((element) => {
// //   return typeof element;
// });
for (i in dataTypes) {
  console.log(i);
}
// console.log(dataTypes);

String.prototype.strong = function () {
  return `<strong>${this}</strong>`;
};
// new Function created by me return strong tag

String.prototype.tag = function (tagName) {
  return `<${tagName}>${this}</${tagName}>`;
};
// 23-10-24 19:29 wednesday
// new Function created by me return HTML tag you want
// for (const [property, key] of Object.(dataTypes)) {
//   console.log(property, key);
// }

for (const element of Object.values(dataTypes)) {
  console.log(typeof element);
}
// --------------------------------------------
const number = new Number(700);
console.log(number);
console.log(typeof number);
console.log(number.toString());
console.log(typeof number.toString());
console.log(number.toFixed(2));
console.log(number.toPrecision(4));
// --------------------------------------------

function user(name, id) {
  this.name = name;
  this.id = id;
}
let hitesh = new user("hitesh", "001");
console.log(hitesh);
{
  let entries = Object.entries(hitesh);
  let keys = Object.keys(hitesh);
  let values = Object.values(hitesh);
  console.log(entries);
  console.log(keys);
  console.log(values);
}
class User {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}
let aayush = new User("aayush", 18);
console.log(aayush);
