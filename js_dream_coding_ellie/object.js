"use strict";
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = {key:value};

// 1. Literals and properties
// object 생성 방법
const obj1 = {}; // "object literal" syntax
const obj2 = new Object(); // "object constructor" syntax

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const kkojae = {
    name : "kkojae",
    age : 30
}

print(kkojae);

// 아래와 같은 기능들이 있지만, 사용하게 되면 유지 보수가 어려우니 사용하지 않는걸 권장합니다.
// with JavaScript magic (dynamically typed language)
// can add properties later
kkojae.hasJob = true;
console.log(kkojae.hasJob); // true

// can delete properties later
delete kkojae.hasJob;
console.log(kkojae.hasJob); // undefined

// 2. Computed properties
// key should be always string
console.log(kkojae.name); // kkojae
console.log(kkojae['name']); // kkojae
kkojae['hasJob'] = true;
console.log(kkojae.hasJob); // true

// .name ["name"] 두방법 모두 사용 가능
// e.g. ['name']의 활용 
// key 값을 어떤걸 받을지 모를때 사용가능
function printValue(obj, key){
    console.log(obj[key]);
    // console.log(obj.key); // 이렇게 출력하면 undefined error 밣생
}
printValue(kkojae, "name"); // kkojae
printValue(kkojae, "age"); // 30

// 3. Property value shorthand
// class가 존재하지 않을 때 사용하던 방법 입니다.
function makePerson(name, age){
    return {
        name,
        age
        // 아래와 같이 key와 value의 이름이 같으면 위와 같이 사용할 수 있습니다.
        // name:name,
        // age:age
    }
}
const person1 = {name:"bob", age:2};
const person2 = {name:"steve", age:3};
const person3 = {name:"dave", age:4};
const person4 = makePerson("kkojae",30);
console.log(person4);

// 4. constructor function
// class가 존재하지 않을 때 사용하던 방법 입니다.
function Person(name, age){
    // this = {}
    // this라는 object를 생성해 this를 return 해주는 함수 내부적으로 자동으로 작동되어 생략되어있는 것!
    this.name = name;
    this.age = age;
    // return this;
}
const person5 = new Person("ellie", 30);
console.log(person5);

// 5. in operator : property existence check (key in obj);
// return true or false
console.log("name" in kkojae); // true
console.log("age" in kkojae); // true
console.log("random" in kkojae); // false

// 6. for..in vs for..of

// for (key in obj)
// kkojae 안에 있는 모든 key들이 차례대로 출력된다.
// key가 없을땐 index번호들이 출력됨.
for (let key in kkojae){
    console.log(key);
}

// for (value of iterable)
const array = [1,2,3,5];
for (let i = 0; i < array.length; i++){
    console.log(array[i]);
}

// 위와 아래의 결과는 같은 결과를 같는다.
for (let value of array){
    console.log(value);
}

// 7. Fun cloning
// object.assgin(dest, [obj1, obj2, obj3 ...])
const user = {name:"kkojae", age:20};
const user2 = user;
// user와 user2는 같은 값을 가르키게 되고, user나 user2의 값을 변경하면 둘다 값이 변한다.
console.log(user);
console.log(user2);
user.age = 30;
user2.name = "coder";
console.log(user); // coder
console.log(user2); // 30

// old way
const user3 = {}
for (let key in user) {
    user3[key] = user[key];
}
console.log(user3);

// Object.assign();
// assign(빈 객체, 복사할 객체);
// 복사할 객체 자리에는 하나의 property가 들어가도 되고 배열이 들어가도 되고, 객체가 들어가도 됩니다.
const user4 = {};
Object.assign(user4, user);
// 위와 아래의 결과 값은 동일합니다.
const user5 = Object.assign({}, user);
console.clear();
console.log(user4);
console.log(user5);

// another e.g.
const fruit1 = {color:"red", price:300};
const fruit2 = {color:"blue", size:"big"};
const mixed = Object.assign({},fruit1, fruit2);
console.log(mixed.color);
console.log(mixed);