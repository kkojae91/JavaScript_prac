"use strict";

// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) {body... return;}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
  console.log("hello");
}
printHello();

function log(message) {
  console.log(message);
}
log("Hello@");

// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = "coder";
}
const kkojae = { name: "kkojae" };
console.log(kkojae);
changeName(kkojae);
console.log(kkojae);

// 3. Default parameters (added in ES6)
function showMessage(message, from) {
  if (from === undefined) {
    from = "unkwon";
  }
  console.log(`${message} by ${from}`);
}
showMessage("hi!");

function showMessage2(message, from = "unkwon") {
  console.log(`${message} by ${from}`);
}
showMessage2("hello!");

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  console.log(args);
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  for (const arg of args) {
    console.log(arg);
  }
  args.forEach((arg) => console.log(arg));
}

printAll("dream", "coding", "kkojae");

// 5. Local scope
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello"; // local variable
  console.log(message);
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = "hihihi";
  }
  // console.log(childMessage);
  printAnother();
}
// console.log(message);
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${result}`);

// Early return, early exit
// bad case
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good case
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () {
  console.log("print");
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}

// anonymous function
const printYes = function () {
  console.log("yes!");
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log("No!");
};

randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function () {
  console.log("simplePrint!");
};

const simplePrint2 = () => console.log("simplePrint!");
const add = (a, b) => a + b;
console.log(add(3, 4));
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log("IIFE");
})();

// Fun Quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
function calculate(command, a, b) {
  switch (command) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "divide":
      return a / b;
    case "multiply":
      return a * b;
    case "remainder":
      return a % b;
  }
}

console.log(calculate("add", 1, 2)); // 3
console.log(calculate("substract", 2, 1)); // 1
console.log(calculate("divide", 2, 2)); // 1
console.log(calculate("multiply", 2, 2)); // 4
console.log(calculate("remainder", 3, 2)); // 1
