// 1.Use strict
// 맨위에 설정해주는게 좋다. 
// 정의하지 않고 사용하는 것이 허용되지 않는다!
"use strict";

// 2. Variable
// let (added in ES6)
// let is mutable
let globalName = "global name";
{
    let name = "ellie";
    console.log(name);
    name = "hello";
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
{
    age = 4;
    var age;
}
console.log(age);

// 3. Constants
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item : number, string, boolean, undefiend, symbol
// object, box container
// function, first-class function
const count = 17; // number
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
// 나눌수 없는 숫자를 나누면 infinity를 얻는다.
// 문자와 숫자를 나누면 NaN 을 얻는다.
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = "not a number"/2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53)~(2**53) 
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello " + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (template string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ""
// true: any other value
const canRead = true;
const test = 3 < 1 ;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;

// let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
// 고유한 식별자를 만들 때 사용된다.
// 같은 값을 할당 받아도 다르다고 출력된다.
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); //false

// 동일한 id값을 같게 하기 위해선 아래와 같이 작성하면 된다.
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true
// symbol은 출력할때 그냥 출력하면 type error를 발생시킨다.
// console.log(`value: ${symbol1}, type: ${typeof symbol1}`); //type error
// symbol1.description << description 을 붙여줘야 제대로 출력된다.
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`)

// object, real-life object, data structure
const ellie = { name:"ellie", age:20 };
ellie.age = 21;
console.log(ellie.age);

// 5. Dynamic typing: dynamically typed language
let text = "hello";
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7'+ 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8'/'2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); //type error