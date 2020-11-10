"use strict";
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality/
// Nearly all objects in JavaScript are instances of Object
// Object = {key:value};


// 1. Literals and properties
// Object 생성방법
const obj1 = {};  // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

const name = "kkojae";
const age = 30;
function print(name, age) {
    console.log(name);
    console.log(age);
}
print(name, age);

// 위와 같이 이름과 네임을 관리 하기는 너무 어렵다.(이름과 나이가 수많은 개수라 생각하면 변수명을 어떻게 지어야할지 부터...)
// 그렇기 때문에 아래와 같이 객체를 생성해서 person이라는 변수에 담아서 관리하면 조금 더 편하게 관리 해줄 수 있다.
function objPrint(person) {
    console.log(person.name);
    console.log(person.age);
}
const kkojae = { name: "kkojae", age: 30 };
objPrint(kkojae);

// with JavaScript magic(미친짓 실제로는 이렇게 코딩하면, 유지보수 및 찾을 수 없는 버그가 생기게 된다.)
// dynamically typed language
// can add properties later
// const 변수임에도 나중에 변경가능... 이렇게는 절대 사용하면 안되지만, 이렇게 사용할 수 있다는건 알고 있자!
kkojae.hasJob = true;
console.log(kkojae.hasJob);

// can delete properties later
delete kkojae.hasJob;
console.log(kkojae.hasJob);

// 2. Computed properties
// 접근방법이 2가지가 있다.
console.log(kkojae.name);
// 아래와 같으 방법으로 접근 하는 방법은 []안에 변수를 안에 집어 넣을 수 있다는 점. 
console.log(kkojae["name"]);
kkojae["hasJob"] = true;
console.log(kkojae.hasJob);

// 아래와 같은 경우 미리 값을 정할 수 없을 때, 혹은 사용자에게 값을 받아와야하는 경우에
// computed properties 를 사용한다.
function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(kkojae, "name");
printValue(kkojae, "age");

// 3.Property value shorthand
function makePerson(name, age) {
    return {
        // name: name, --> key 와 value 가 같으면 key를 생략할 수 있다.
        name,
        // age: age,
        age
    }
}
// JavaScript 에서는 위와 같은 작업을 아래와 같이 해준다.
// class라는 개념이 없을때 사용하던 방법

// 4. constructor function
function Person(name, age) {
    // this = {} 이 작업이 생략되어 있다고 보면 됩니다.
    this.name = name;
    this.age = age;
    // return this; 이 작업이 생략되어 있다고 보면 된다.
}

const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
// 계속 반복해야하는 작업을 없애 주기 위해 makePerson 이라는 함수를 만들어 return 값을 객체로 리턴해준다.
const person4 = makePerson("kkojae", 30);
console.log(person4); // {name: "kkojae", age: 30} 객체가 잘 생성된 것을 확인 할 수 있다.
const person5 = new Person("elile", 30);
console.log(person5); // Person {name: "elile", age: 30} 이렇게 객체가 생성된 것을 확인 할 수 있다.

// 5. in operator: property existence check (key in obj)
// key가 있는지 없는지 확인하는 것.
console.log("name" in kkojae); // true
console.log("age" in kkojae);  // true
console.log("random" in kkojae); //false
console.log(kkojae.random); // undefiend

console.clear();
// 6. for..in vs for..of

// for (key in obj){}
// kkojae의 객체를 돌면서 각각의 key값을 리턴해준다.
for (let key in kkojae) {
    console.log(key);  // name, age, hasJob
}

// for (value of iterable){}
// for of 는 iterable한 array형식을 사용해줘야한다.
// object는 사용불가능... not iterable error 발생
const array = [5, 2, 7, 4];
for (let value of array) {
    // 5,2,7,4 가 출력된다.
    // for in 을 출력해보면 0,1,2,3 이 출력된다.
    console.log(value);
}

// array 배열에 entries를 사용하면 index와 value 둘다 얻어 낼 수 있다. python의 enumerate와 같은기능..
for (let [index, value] of array.entries()) {
    console.log(index, value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3])
const user = { name: "kkojae", age: "30" };
const user2 = user;
// user2의 name을 변경하게 되면 user의 name 역시 변경되게 됩니다. 같은 공간을 가르키면서 사용하고 있기 때문.
user2.name = "coder";
console.log(user);

// old way
const user3 = {};
for (let key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);
user3.name = "jaejae";
// 기존의 값은 변경되지 않고 user3의 값만 변경된다. 서로 다른 저장공간을 사용하고 있기 때문.
console.log(user3.name);  // jaejae
console.log(user.name);   // coder

// 또다른 방법으로는 assign()을 활용하는 방법이 있다.
// const user4 = {};
// Object.assign(user4, user);
// short coding
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue  제일 뒤에 있는걸로 덮어 씌운다.
console.log(mixed.size);  // big