// 1. String concatenation
console.log("my"+" cat");
console.log("1"+2);
console.log(`string literals: 1 + 2 = ${1+2}`);

// 2.Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// 위의 코드는 아래의 코드와 같은 의미!
// counter = counter+1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); // 3 , 3
const postIncrement = counter++;
// counter를 postIncrement에 먼저 대입 후 counter에 1을 더한 값을 counter에 저장.
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`); // 3, 4
// decrement도 위와 같이 동장한다.
// counter에 -1 한 후에 preDecrement에 대입
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`); // 3, 3
// postDecrement에 counter값을 대입한 후 counter에 -1한 값을 대입
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`); // 3, 2

// 4. Assignment operators
let x = 3;
let y = 6;
console.log(x += y); // x = x + y;
console.log(x -= y); // x = x - y;
console.log(x *= y); // x = x * y;
console.log(x /= y); // x = x / y;

// 5. Comparison operators
console.log(10 < 6); // less than   return false
console.log(10 <= 6); // less than or equal    return false
console.log(10 > 6); // greater than   return true
console.log(10 >= 6); // greater than or equal   return true

// 6. Logical operators : || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
// 앞쪽의 값이 true이면 그 뒤는 확인 하지 않는다.
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
// 앞쪽에 어떠한 값이 false이면 뒤의 value는 확인하지 않는다.
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.somthing
// if (nullableObject != null){
//     nullableObject.something;
// }

function check(){
    for (let i = 0; i < 10; i++){
        console.log("ㅠ");
    }
    return true;
}

// ! (not)
// 값을 바꿔준다 value1의 값이 false이기 때문에 true를 출력
console.log(!value1); // true


// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = {name: "ellie"};
const ellie2 = {name: "ellie"};
const ellie3 = ellie1;
// 저장된 공간이 다르기 때문에 false로 출력 되고 ellie3 === ellie1 은 같은 공간을 대입 해주었기 때문에 true가 출력된다.
console.log(ellie1 == ellie2); // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log("" == false); // true
console.log("" === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else if, else
// const name = prompt("What you are name?");
const name = "kkojae";
if (name === "kkojae"){
    console.log("Welcome, Kkojae!");
} else if (name === "ellie"){
    console.log("You are amazing coder");
} else{
    console.log("unknown");
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
// name이 kkojae가 true 이면 ? 'true' : 'false';
// true 부분이 실행, false이면 false부분이 실행
// 간단한 경우에만 사용하면 좋다 복잡하면 가독성이 떨어짐..
console.log(name === "kkojae" ? "yes":"no");

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = "IE";
switch (browser){
    case "IE":
        console.log("go away!");
        break;
    case "Chrome":
        console.log("love you!");
        break;
    case "Firefox":
        console.log("like you!");
        break;
    default:
        console.log("same all!");
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i =3;
// i 가 false가 될때 까지 {여기안에 들어있는 것을 실행한다.}
while (i>0){
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do{
    console.log(`do while: ${i}`);
    i--;
} while(i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

// for안에 지역변수를 선언해서 사용가능 
for (let i = 3; i > 0; i -= 2){
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++){
    for (let j = 0; j < 10; j++){
        console.log(`i: ${i}, j: ${j}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
let Question1 = function(){
    for (let i = 0; i < 11; i++){
        if (i % 2 === 0){
            console.log(`q1 : ${i}`);
        }
    }
}
Question1();

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
let Question2 = function(){
    for (let i = 0; i < 11; i++){
        if (i === 8){
            break;
        }
        console.log(`q2 : ${i}`);
    }
}
Question2();