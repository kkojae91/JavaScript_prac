"use strict";
// Object
// one of the JavaScript's data types.
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and properties
const name = "kkojae";
const age = 31;
function print(name, age) {
  console.log(name);
  console.log(age);
}
print(name, age);

const kkojae = { name: "kkojae", age: 31 };
function print2(kkojae) {
  console.log(kkojae.name);
  console.log(kkojae.age);
}
print2(kkojae);

// make object
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

// with JavaScript magic (dynamically typed language)
// can add properties later
kkojae.hasJob = true;
console.log(kkojae.hasJob);

// can delete properties later
delete kkojae.hasJob;
console.log(kkojae.hasJob);

// 2. Computed properties
// 아래의 두 방법 모두 접근 가능
console.log(kkojae.name);
console.log(kkojae["name"]);
kkojae["hasJob"] = true;
console.log(kkojae.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(kkojae, "name");
printValue(kkojae, "age");

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = makePerson("kkojae", 30);
function makePerson(name, age) {
  return {
    name,
    age,
  };
}
console.log(person4);

// 4. Constructor function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}
const person5 = new Person("kkojae91", 31);
console.log(person5);

// 5. in operator: property existence check (key in object)
console.log("name" in kkojae);
console.log("age" in kkojae);
console.log("random" in kkojae);
console.log(kkojae.random);

console.clear();
// 6. for..in vs for..of
// for (key in obj)
for (let key in kkojae) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (let value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3])
const user = { name: "kkojae", age: 20 };
const user2 = user;
user2.name = "coder";
console.log(user); // coder

// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.log(user3);

// current way
// depth가 생기지 않는다.
// const user4 = {};
// Object.assign(user4, user);
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed);
console.log(mixed.color);
console.log(mixed.size);
