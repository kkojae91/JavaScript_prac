// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs task or calculates a value

// 1. Function declaration
// function name(param1, param2) {bodt... return;}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello(){
    console.log("Hello");
}
printHello();

function log(message){
    console.log(message);
}
log("Hello@");
log(1234);

// 2.Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj){
    obj.name = "coder";
}
const name = {name:"kkojae"};
changeName(name);
console.log(name);

// 3. Default parameters (added in ES6)
// from 에 기본값 설정이 가능하다.
function showMessage(message="default", from="unknown"){
    console.log(`${message} by ${from}`);
}
showMessage("Hi!!");
showMessage();

// 4. Rest parameters (added in ES6)
// ...args로 parameter를 주면 array형태로 parameter를 주게 된다.
// 3가지 방법 모두 다 같은 결과를 나타낸다.
function printAll(...args){
    // method 1
    for (let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
    // method 2
    for (const arg of args){
        console.log(`for of : ${arg}`);
    }
    // method 3
    args.forEach((arg) => console.log(`forEach : ${arg}`));
}
printAll("dream", "coding", "kkojae");

// 5. Local scope
let globalMessage = "global"; // 밖에서 선언한 변수는 다 전역변수
function printMessage(){
    let message = "hello";
    console.log(message); // print hello
    console.log(globalMessage); // print global

    function printAnother(){
        console.log(message); // print hello
        let childMessage = "hello child";
        console.log(childMessage);
    }
    printAnother();
    // console.log(childMessage); // Uncaught Reference Error
}
// console.log(message); // Uncaught Reference Error
printMessage();

// 6. Return a value
function sum(a,b){
    return a + b;
}
const result = sum(1,2);
console.log(`result: ${result}`); // 3
console.log(`sum: ${sum(1,2)}`); // 3

// 7. Early return, early exit
// bad case
function upgradeUser(user){
    if (user.point > 10){
        // long upgrade logic...
    }
}

// good case
// 조건이 맞지 않을때는 빨리 리턴을 해주게 작성하는게 좋다.
function upgradeUser(user){
    if (user.point <=10){
        return;
    }
    // long upgrade logic...
}


// First-class function
// function are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function.

// 1. Function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.
const print = function(){ // anonymous function
    console.log("print");
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if (answer === "love you"){
        printYes();
    } else{
        printNo();
    }
}
// anonymous function
const printYes = function(){
    console.log("Yes!");
}
// named function
// better debugging in debugger's stack traces
// recursion
const printNo = function print(){
    console.log("No!");
}
randomQuiz("wrong", printYes, printNo); // No!
randomQuiz("love you", printYes, printNo); // Yes!

// Arrow function
// always anonymous function
const simplePrint = function(){
    console.log("simplePrint");
}
simplePrint();
// 위와 아래는 같은 코드 입니다 
const ArrowSimplePrint = () => console.log("Arrow simplePrint");
ArrowSimplePrint();

const add = function(a,b){
    return a+b;
}
console.log(add(1,2));
// 위의 코드와 아래의 코드는 같은 코드 입니다.
const arrowAdd = (a,b) => a+b;
console.log(arrowAdd(3,4));

// IIFE: Immediately Invoked Function Expression
// 함수를 생성하고 바로 호출 할 경우 사용 함수를 괄호로 감싸고 (); 를 붙여 호출 한다.
(function hello(){
    console.log("LIFE");
})();

// Fun Quiz Time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b){
    switch (command){
        case "add":
            console.log(a + b);
            break;
        case "substract":
            console.log(a - b);
            break;
        case "divide":
            console.log(a / b);
            break
        case "multiply":
            console.log(a * b);
            break;
        case "remainder":
            console.log(a % b);
            break;

    }
}
let add_1 = "add";
let substract_1 = "substract";
let divide_1 = "divide";
let multiply_1 = "multiply";
let remainder_1 = "remainder";
calculate(add_1, 1, 2);
calculate(substract_1, 3,2);
calculate(divide_1, 4,2);
calculate(multiply_1, 2,2);
calculate(remainder_1,4,2);