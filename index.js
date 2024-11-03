console.log("Here is JavaScript Code: ");

// --------------------------------------------
// Text manipulation
const text = "The Quick Brown Fox Jumps Over The Lazy Dog.";
console.log(text);
// return: The Quick Brown Fox Jumps Over The Lazy Dog.
console.log(text.split("").reverse().join(""));
// return: .goD yzaL ehT revO spmuJ xoF nworB kciuQ ehT
console.log(text.split(" ").reverse().join(" "));
// return: Dog. Lazy The Over Jumps Fox Brown Quick The
console.log(text.split("").reverse().join("").split(" ").reverse().join(" "));
// return: ehT kciuQ nworB xoF spmuJ revO ehT yzaL .goD
console.log(text.split("").join(" "));
// return: T h e   Q u i c k   B r o w n   F o x   J u m p s   O v e r   T h e   L a z y   D o g .
// Text manipulation
// --------------------------------------------

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

// --------------------------------------------
// card
const content1 = document.getElementById(`content-1`);
const tag = (tag, className, content) => {
  const element = document.createElement(tag);
  element.className = className;
  element.appendChild(document.createTextNode(content));
  return element;
};
const card = (title, text) => {
  const card = tag(`article`, `card`, ``);
  const cardTitle = tag(`h3`, `card-title`, title);
  const cardText = tag(`p`, `card-text`, text);
  card.append(cardTitle, cardText);
  content1.appendChild(card);
};
card("this is title", "this is text in this article");
// card
// --------------------------------------------
// array methods
const arr = [1, 2, 3, 4, 5, 7, 9, "string", true];
arr.push(false, null, undefined, 100);
arr.pop();
arr.shift();
arr.unshift(10);
console.log(arr);
console.log(arr.splice(1, 4));
console.log(arr);
arr.sort();
arr.reverse();
// arr.fill(1)
console.log(arr);
// these methods of array are change the original array
// --------------------------------------------
// new Object()
{
  let sym = Symbol("this is a symbol");
  let num = new Number(700);
  const obj = {
    name: "hitesh",
    surname: "chadhary",
    [sym]: "key1",
    [num]: "num1",
  };
  console.log("object you see it: ", obj);
}
// --------------------------------------------
// lastCharacter()
function lastCharacter(string) {
  return string[string.length - 1];
}
console.log(lastCharacter("hitesh chadhary"));
// --------------------------------------------
// greet()
function greet(name = "hitesh") {
  return `Have a Good day, ${name}`;
}
// --------------------------------------------
// setFirstElement()
function setFirstElement(array, element) {
  array.shift();
  array.unshift(element);
  return Array.from(array);
}
{
  const result = setFirstElement;
  console.log(result([1, 2, 4, 5], 7));
}
// --------------------------------------------
// time container
const dateElement = document.getElementById(`date`);
const dayElement = document.getElementById(`day`);
const monthElement = document.getElementById(`month`);
const yearElement = document.getElementById(`year`);
const hourElement = document.getElementById(`hour`);
const minuteElement = document.getElementById(`minute`);

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const current = new Date();
dateElement.textContent = current.getDate();
dayElement.textContent = weekDays[current.getDay()];
monthElement.textContent = monthName[current.getMonth()];
yearElement.textContent = current.getFullYear();
hourElement.textContent = current.getHours();
minuteElement.textContent = current.getMinutes();
// time container
// --------------------------------------------
