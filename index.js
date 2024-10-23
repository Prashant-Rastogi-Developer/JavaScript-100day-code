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
