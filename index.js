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
// switch case values
let month = 3;
switch (month) {
  case 1:
    "this month of January";
    break;
  case 2:
    "this month of February";
    break;
  case 3:
    "this month of March";
    break;
  default:
    "otherwise return any value";
    break;
}
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
// random user function()
async function randomUser() {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  return data;
}
randomUser();
// --------------------------------------------
// basic of localStorage
const storeItem = localStorage.setItem("key", "value");
// --------------------------------------------
// use of filter
{
  const arr = [2, 3, 4, 5, 6, 7, 8, 9, 0, true];
  arr.filter((e) => e > 4); // (5) [5, 6, 7, 8, 9]
}
{
  const arr = [1, 2, 3, 4, 5];
  arr.map((e) => e * 4); // (5) [4, 8, 12, 16, 20]
}
{
  const arr = [1, 2, true, false, true, true, true, 2, 3, 4, 4, 5];
  arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0); // 25 true = 1, false 0
}
{
  const obj = {
    name: "hitesh",
    id: 1,
  };
  const { name, id } = obj;
  name, id; // hitesh 1
}
{
  const channelName = "CODE with HaRRy";
  channelName.toLowerCase(); // code with harry
  channelName.toUpperCase(); // CODE WITH HARRY
}
{
  const num = [2, 1, 2, 4, 5];
  const num2 = [...num, 34, 4, 4];
  num2;
  // the other mehtod of spread an array in another variable to store
}
{
  const createPromise = new Promise((resolve, reject) => {
    const num = 3;
    if (num == 3) {
      resolve("Congrats! you resolved this problem.");
    } else {
      reject(new Error("You have received a rejected message."));
    }
  });
  createPromise
    .then((message) => message) // Congrats! you resolved this problem.
    .catch((error) => {
      `Error: ${error.message}`; // Error: You have received a rejected message.
      `Error Type: ${error.name}`; // Error Type: Error
    });
  async function handlePromise() {
    try {
      const message = await createPromise;
      message; // Congrats! you resolved this problem.
    } catch (error) {
      `Error: ${error.message}`; // Error: You have received a rejected message.
      `Error Type: ${error.name}`; // Error Type: Error
    }
  }
  handlePromise();
}
// Closure concept
{
  function init() {
    const name = "hitesh";
    name; // first log: hitesh
    function sayFirstName() {
      name; // second log: hitesh
    }
    return sayFirstName;
  }
  const result = init(); // hitesh;
  const result2 = init()(); // hitesh hitesh
  result(); // hitesh hitesh
}
// check odd or even
{
  function oddOrEven(number) {
    return number % 2 === 0 ? "even" : "odd";
  }
  oddOrEven(2); // even
  oddOrEven(3); // odd
}
// --------------------------------------------
// Formula: Area = length * width
{
  const areaOfRectangle = (length, width) =>
    `${Number(length) * Number(width)}`;
  areaOfRectangle(200, 30); // 6000
}
// --------------------------------------------
// reverse string by using loop
function reverseString(str) {
  str = String(str);
  let result = ``;
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
reverseString("ashish"); // hsihsa
reverseString(49393); // 39394
reverseString(true); // eurt
reverseString(undefined); // denifednu
reverseString(null); // llun
// --------------------------------------------
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
factorial(5); // 120
factorial(7); // 5040
// --------------------------------------------
function httpToHttps(url) {
  return url.replace("http", "https");
}
httpToHttps("http://www.google.com"); // https://www.google.com
// --------------------------------------------
load();
function load() {
  const color = localStorage.getItem("color");
  if (color) {
    document.body.style.backgroundColor = color;
  }
}
function save() {
  localStorage.setItem("color", document.body.style.backgroundColor);
}
// --------------------------------------------
// single space between string using for loop
function singleSpaceBetweenString(str) {
  str = String(str);
  let result = ``;
  for (let i = 0; i <= str.length - 1; i++) {
    result += `${str[i]} `;
  }
  return result;
}
singleSpaceBetweenString("hello world"); // h e l l o   w o r l d
// --------------------------------------------
// CreateUser class
class CreateUser {
  constructor(firstName, lastName, age, designation) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.designation = designation;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  getBirthYear() {
    return new Date().getFullYear() - this.age;
  }
}
const userVikas = new CreateUser("Vikas", "Gangwar", "20", "Manager");
userVikas;
{
  // Destructure the object
  const { firstName, age } = userVikas;
  firstName, age; // Vikas 20
}
// CreateUser {firstName: 'Vikas', lastName: 'Gangwar', age: '20', designation: 'Manager'}
{
  const color = ["red", "green", "blue"];
  const [a, b, c] = color;
  a, b, c; // red green blue
  const [, , getColor] = color;
  getColor; // blue
}
// --------------------------------------------
// start of dom manipulation
// tag()
const createElement = (tagName, className, textContent) => {
  const element = document.createElement(tagName);
  element.className = className;
  if (textContent) element.appendChild(document.createTextNode(textContent));
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
function createCard(title, text) {
  const card = createElement(`article`, `card`);
  const span = createElement(`span`, "close");
  const img = createElement(`div`, `item`);
  const cardTitle = createElement(`h3`, `card-title`, title);
  const cardText = createElement(`p`, `card-text`, text);
  span.addEventListener(`click`, (e) => {
    e.target.parentElement.remove();
  });
  img.style.backgroundColor = randomColor();
  img.addEventListener(`click`, function (e) {
    const newColor = randomColor();
    e.target.style.backgroundColor = newColor;
    document.body.style.backgroundColor = newColor;
    save();
  });
  card.append(span, img, cardTitle, cardText);
  content.append(card);
}
// card(`Box-1`, text);
// card(`Box-2`, text);
// card(`Box-3`, text);
for (let i = 1; i <= 5; i++) {
  createCard(`Box-${i}`, text);
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
dateElement.appendChild(document.createTextNode(current.getDate()));
dayElement.appendChild(document.createTextNode(weekDays[current.getDay()]));
monthElement.appendChild(
  document.createTextNode(monthName[current.getMonth()])
);
yearElement.appendChild(document.createTextNode(current.getFullYear()));
hourElement.appendChild(document.createTextNode(current.getHours()));
minuteElement.appendChild(document.createTextNode(current.getMinutes()));
// --------------------------------------------
// dark mode button
const darkBtn = document.getElementById(`darkBtn`);
darkBtn.addEventListener(`click`, (e) => {
  document.body.style.backgroundColor = "var(--black)";
  save();
});
// --------------------------------------------
// input
const input = document.getElementById(`input`);
input.addEventListener(`keyup`, (e) => {
  if (e.key === "Enter") {
    const changeTitle = document.getElementsByClassName(`card-title`);
    Array.from(changeTitle).forEach((element) => {
      element.innerText = e.target.value;
    });
  }
});
// --------------------------------------------
// notification
const notification = document.getElementById(`notification`);
const toastContent = document.getElementById("toastContent");
function toast() {
  const span = createElement("span", "notification-item");
  const closeBtn = createElement("span", "close");
  const p = createElement("p", "text", "You received this message");
  closeBtn.addEventListener(`click`, (e) => {
    e.target.parentElement.remove();
  });
  setTimeout(() => {
    span.remove();
  }, 3000);
  span.append(closeBtn, p);
  toastContent.append(span);
}
notification.addEventListener(`click`, (e) => {
  toast();
});
// --------------------------------------------
// login-btn
const loginBtn = document.getElementById(`loginBtn`);
function modal() {
  const element = createElement(`div`, "modal", "Sample Modal");
  const closeBtn = createElement(`span`, "closeBtn");
  closeBtn.addEventListener(`click`, (e) => {
    e.target.parentElement.remove();
  });
  element.appendChild(closeBtn);
  document.body.append(element);
  return element;
}
loginBtn.addEventListener(`click`, (e) => {
  e.preventDefault();
  modal();
  e.preventDefault();
  console.log(e.target);
});
// --------------------------------------------
// dropdown menubar
const dropdownButton = document.getElementById(`dropbtn`);
const dropdownContent = document.getElementById(`dropdown-content`);
dropdownButton.addEventListener(`click`, () => {
  dropdownContent.classList.toggle(`show`);
});
Array.from(dropdownContent.children).forEach((item) => {
  item.addEventListener(`click`, (event) => {
    dropdownButton.innerText = item.innerText;
    dropdownContent.classList.toggle(`show`);
  });
});
// --------------------------------------------
// clock
const hourArrow = document.getElementById(`hourArrow`);
const minuteArrow = document.getElementById(`minuteArrow`);
const secondArrow = document.getElementById(`secondArrow`);
function analog() {
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const hourRotation = 30 * hour + minutes / 2;
  const minutesRotation = 6 * minutes;
  const secondsRotation = 6 * seconds;

  hourArrow.style.transform = `rotate(${hourRotation}deg)`;
  minuteArrow.style.transform = `rotate(${minutesRotation}deg)`;
  secondArrow.style.transform = `rotate(${secondsRotation}deg)`;

  if (`rotate(${secondsRotation}deg)` === "rotate(6deg)") {
    secondArrow.style.transition = "all 1s linear";
  }
  if (`rotate(${secondsRotation}deg)` === "rotate(354deg)") {
    secondArrow.style.transition = "none";
  }
}
setInterval(analog, 1000);
// --------------------------------------------
