// --------------------------------------------
// Text manipulation
const text = `The Quick Brown Fox Jumps Over The Lazy Dog.`;
text;
// The Quick Brown Fox Jumps Over The Lazy Dog.
text.split(``).reverse().join(``);
// .goD yzaL ehT revO spmuJ xoF nworB kciuQ ehT
text.split(` `).reverse().join(` `);
// Dog. Lazy The Over Jumps Fox Brown Quick The
text.split(``).reverse().join(``).split(` `).reverse().join(` `);
// ehT kciuQ nworB xoF spmuJ revO ehT yzaL .goD
text.split(``).join(` `);
// T h e   Q u i c k   B r o w n   F o x   J u m p s   O v e r   T h e   L a z y   D o g .
// --------------------------------------------
let dataTypes = {
  null: null,
  true: true,
  number: 123,
  false: false,
  undefined: undefined,
  string: `text string`,
  symbol: Symbol(`This is symbol`),
};
// let a = Array.from(dataTypes).forEach((element) => {
// //   return typeof element;
// });
for (i in dataTypes) {
  i;
  // null
  // true
  // number
  // false
  // undefined
  // string
  // symbol
}
dataTypes; // {null: null, true: true, number: 123, false: false, undefined: undefined, …}
// --------------------------------------------
// strong prototype
String.prototype.strong = function () {
  return `<strong>${this}</strong>`;
};
// new Function created by me return strong tag

String.prototype.tag = function (tagName) {
  return `<${tagName}>${this}</${tagName}>`;
};
// 23-10-24 19:29 wednesday
// new Function created by me return HTML tag you want
for (const [property, key] of Object.entries(dataTypes)) {
  property, key;
  // null null
  // true true
  // number 123
  // false false
  // undefined undefined
  // string text string
  // symbol Symbol(This is symbol)
}
for (const element of Object.values(dataTypes)) {
  typeof element;
  // object
  // boolean
  // number
  // boolean
  // undefined
  // string
  // symbol
}
// --------------------------------------------
const number = new Number(700);
number; // Number {700}
typeof number; // object
number.toString(); // 700
typeof number.toString(); // string
number.toFixed(2); // 700.00
number.toPrecision(4); // 700.0
// --------------------------------------------

function user(name, id) {
  this.name = name;
  this.id = id;
}
let hitesh = new user(`hitesh`, `001`);
hitesh; // user {name: 'hitesh', id: '001'}
{
  let entries = Object.entries(hitesh);
  let keys = Object.keys(hitesh);
  let values = Object.values(hitesh);
  entries; // (2) [Array(2), Array(2)]
  keys; // (2) ['name', 'id']
  values; // (2) ['hitesh', '001']
}
class User {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}
let aayush = new User(`aayush`, 18);
aayush; // User {name: 'aayush', id: 18}
// --------------------------------------------
// array methods
const arr = [1, 2, 3, 4, 5, 7, 9, `string`, true];
arr.push(false, null, undefined, 100);
arr.pop();
arr.shift();
arr.unshift(10);
arr; // (12) [10, 2, 3, 4, 5, 7, 9, 'string', true, false, null, undefined]
arr.splice(1, 4); // (4) [2, 3, 4, 5]
arr; // (8) [10, 7, 9, 'string', true, false, null, undefined]
arr.sort();
arr.reverse();
// arr.fill(1) // (8) [1, 1, 1, 1, 1, 1, 1, 1]
arr; // (8) [undefined, true, 'string', null, false, 9, 7, 10]
// these methods of array are change the original array
// --------------------------------------------
// new Object()
{
  let sym = Symbol(`this is a symbol`);
  let num = new Number(700);
  const obj = {
    name: `hitesh`,
    surname: `chaudhary`,
    [sym]: `key1`,
    [num]: `num1`,
  };
  `object you see it: `, obj; // object you see it:  {700: 'num1', name: 'hitesh', surname: 'chaudhary', Symbol(this is a symbol): 'key1'}
}
// --------------------------------------------
// lastCharacter()
function lastCharacter(string) {
  return string[string.length - 1];
}
lastCharacter(`hitesh chaudhary`); // y
// --------------------------------------------
// greet()
function greet(name = `hitesh`) {
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
  result([1, 2, 4, 5], 7); // (4) [7, 2, 4, 5]
}
// --------------------------------------------
// arrayToString()
function arrayToString(...array) {
  return String(array);
}
{
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, `string`, true, false];
  const result = arrayToString(array);
  result; // 1,2,3,4,5,6,7,8,9,10,string,true,false
}
// --------------------------------------------
// getMiddle()
function getMiddleValueOfSingleArray(array) {
  return array[1];
}
{
  const result = getMiddleValueOfSingleArray;
  result([1, 2, 3]); // 2
}
// --------------------------------------------
// check password
function enterPassword(password, passwordRepeat) {
  if (password === passwordRepeat && password.length >= 7) {
    return true;
  }
  return false;
}
{
  const pwd1 = enterPassword(`abcdef`, `abcdef`);
  const pwd2 = enterPassword(`1234567abcd`, `1234567abcd`);
  const pwd3 = enterPassword(`1234567abcd`, `abcd1234567`);
  `password1: `, pwd1; // false
  `password2: `, pwd2; // true
  `password3: `, pwd3; // false
}
// --------------------------------------------
// true length
Object.prototype.trueLength = function () {
  return this.length;
};
{
  const array = [1, 2, 3, , undefined, null, 0, `string`, true, false];
  `this is if array is convert into a string and trueLength() finds it true length and additional commas ${array.toString()}: ${array
    .toString()
    .trueLength()} is length`;
  // this is if array is convert into a string and trueLength() finds it true length and additional commas 1,2,3,,,,0,string,true,false: 28 is length
}
// --------------------------------------------
// use of replaceAll()
text.split(` `).fill(0).join(` `).replaceAll(0, 7); // 7 7 7 7 7 7 7 7 7
// --------------------------------------------
// camelCase()
function camelCase(str) {
  let a = str.split(" ");
  let b = a[0].at(0).toUpperCase() + a[0].slice(1);
  let c = a[1].at(0).toUpperCase() + a[1].slice(1);
  return `${b}${c}`;

  // let n = str.split(' ')
  // let leng = str.split(" ");
  // for (let i = 0; i < leng; i++) {
  //   console.log(n);
  // }
  // let n = str.split(" ");
  // for (const element in n) {
  //   console.log(element);
  // }
}
camelCase("ecma script");
camelCase("java script");
camelCase("type script");
// this function is good for execute
function toCamelCase(str) {
  return str
    .trim()
    .split(" ")
    .map((word, index) => {
      if (index === 0) return word.toLowerCase();
      // else: see word if, index>0 || 1, 2, 3... index;
      else return word.at(0).toUpperCase() + word.slice(1);
    })
    .join("");
}
toCamelCase("java"); // java
toCamelCase("Java script"); // JavaScript
toCamelCase(" Java script hello world"); // JavaScriptHelloWorld
toCamelCase("get element by id"); // getElementById
// --------------------------------------------
function capitalize(name) {
  return name
    .trim()
    .split(" ")
    .map((word) => word.at(0).toUpperCase() + word.slice(1))
    .join(" ");
}
capitalize("hitesh chaudhary"); // Hitesh Chaudhary
capitalize(" developer man "); // Developer Man

// --------------------------------------------
// start of dom manipulation
// tag()
const tag = (tag, className, content) => {
  const element = document.createElement(tag);
  element.className = className;
  element.appendChild(document.createTextNode(content));
  return element;
};
// --------------------------------------------
// randomColor()
function randomColor() {
  const [a, b, c] = Array(3)
    .fill(0)
    .map(() => Math.floor(Math.random() * 255) + 1);
  return `rgb(${[a, b, c]})`;
}
// --------------------------------------------
// card()
const content = document.getElementById(`content`);
function card(title, text) {
  const card = tag(`article`, `card`, ``);
  const img = tag(`div`, `item`, ``);
  const cardTitle = tag(`h3`, `card-title`, title);
  const cardText = tag(`p`, `card-text`, text);
  card.append(img, cardTitle, cardText);
  img.style.backgroundColor = randomColor();
  // setInterval(() => {
  //   img.style.backgroundColor = randomColor();
  // }, 1000);
  img.addEventListener(`mouseover`, function (e) {
    e.target.style.backgroundColor = randomColor();
  });
  content.append(card);
}
// card(`Box-1`, text);
// card(`Box-2`, text);
// card(`Box-3`, text);
for (let i = 1; i <= 7; i++) {
  card(`Box-${i}`, text);
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
  `Sunday`,
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`,
];
const monthName = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
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
// select menubar
const select = document.getElementById(`select`);
const inputText = document.getElementById(`text`);
const list = document.getElementById(`list`);
select.addEventListener(`click`, function () {
  list.classList.toggle(`hide`);
});
Array.from(list.children).forEach((e) => {
  e.addEventListener(`click`, function (event) {
    inputText.innerText = event.target.innerText;
    list.classList.toggle(`hide`);
  });
});
// end of dom manipulation
// --------------------------------------------
