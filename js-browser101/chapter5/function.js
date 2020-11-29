'use strict';

// 반복적인 작업을 효율적으로 하기 위한 것이 function
const num1 = 1;
const num2 = 2;
const result1 = num1 + num2;
console.log(result1); // 3

const num3 = 1;
const num4 = 2;
const result2 = num3 + num4;
console.log(result2); // 3

function add(number1, number2) {
  return number1 + number2;
}

const sum = add(3, 4);
console.log(sum); // 7

const doSomething = add;
console.log(doSomething); // doSomething === add;
const sum2 = doSomething(4, 5);
console.log(sum2); // 9

// 아무런 인자를 받지 않는 함수... 인풋을 넣어줘도 아무런 일이 일어나지 않는다.
function print() {
  console.log('print');
}
print(); //print

function print2(name, age) {
  console.log(`${name}, ${age}`);
}
print2('kkojae', 30); // kkojae, 30

function divide(number1, number2) {
  return number1 / number2;
}

function surprise(callback) {
  const result = callback(2, 3); // === add(2, 3)
  console.log(result);
}

surprise(add); // 5

surprise(divide); // 0.666....
