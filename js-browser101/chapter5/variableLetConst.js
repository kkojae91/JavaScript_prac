'use strict';

// number, string, boolean, null, undefiend (작은 단위의 아이들은 각각 따로 따로 저장 공간을 할당 받는다)
let number = 2;
let number2 = number;
console.log(number); // 2
console.log(number2); // 2

number2 = 3;
console.log(number); // 2
console.log(number2); // 3

// object를 변수에 할당하고, 그 object를 다른 변수에 할당하면, 서로 같은 주소를 같게 된다.
let obj = {
  name: 'kkojae',
  age: 30,
};
console.log(obj.name); // kkojae

let obj2 = obj;
obj2.name = 'jaejae';
// 서로 같은 주소를 가지고 있기 때문에, obj 한곳을 변경하면, obj, obj2 모두 값이 변경되는 것.
console.log(obj.name); // jaejae
console.log(obj2.name); // jaejae

obj.age = 29;
console.log(obj.age); // 29
console.log(obj2.age); // 29
console.log('---------');
// let은 선언 후 나중에 변수의 값을 변경할 수 있다.
// const는 한번 선언하게 되면 나중에 값을 절대! 변경할 수 없다.
// object를 const변수에 할당했을때, ref안의 값은 변경이 가능 하다.

const obj01 = {
  name: 'kojae',
  age: 20,
};
console.log(obj01.name); // kojae
obj01.name = 'jaejeung';
console.log(obj01.name); // jaejeung

// 아래와 같은 형식은 불가능!!
// 기존의 ref를 다른 ref로 변경은 불가능
// obj01 = {
//   블라블라
// }

const obj02 = obj01;
console.log(obj02.name); // jaejeung
obj02.name = 'kkojae';
console.log(obj01.name); // kkojae
console.log(obj02.name); // kkojae
