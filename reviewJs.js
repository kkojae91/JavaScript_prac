"use strict";

console.log("hello world!");

// let vs var vs const 변수 선언 차이점.
var a = "test";
console.log(a);

function helloVar() {
  for (var i = 0; i < 5; i++) {
    console.log(i, "for문 안");
  }
  console.log(i, "for문 밖");
}
// helloVar();

function helloLet() {
  for (let j = 0; j < 5; j++) {
    console.log(j, "for문 안");
  }
  console.log(j, "for문 밖");
}
// helloLet();

let name = "kojae";
name = "jaejeung";
console.log(name);

const nameConst = "kkojae";
// nameConst = "Kkojae";
// console.log(nameConst); uncatched type error

// 대입연산이 아닌 객체의 주소값이 변경되는게 아니라면 변경되는게 아니다.
const person = {
  age: 20,
  name: "sam",
};
console.log(person.age);

person.age += 1;
console.log(person.age);

let isStudent = true;
let price = isStudent ? "8,000won" : "12,000";
console.log(price);

// arrow function 암묵적 리턴

const add = (a, b) => {
  return console.log(a + b);
};
add(1, 2);

// 위와 아래는 동일한 코드 입니다.
const add2 = (a, b) => console.log(a + b);
add2(2, 3);

// spread 연산자
const zoo = ["cat", "dog", "lion"];

// 아래와 같이는 많이 사용하지 않는다.
// zoo.push('eagle');

// 기존에 선언된 밖에 있는 변수는 건들지 않고 아래와 같이 새롭게 선언해주는게 좋다.
const addAnimal = (zoo, animal) => {
  // let zooArr = zoo;
  return zooArr.push(animal);
};

// const newZoo = addAnimal(zoo, "eagle");
// console.log(newZoo);

// spread 연산자
function spread() {
  const addAnimal2 = (zoo, animal) => {
    let zooArr2 = [...zoo, animal];
    return zooArr2;
  };

  const newArr2 = addAnimal2(zoo, "tiger");
  console.log(newArr2);

  // spread연산자 예시2
  // 불변성을 항상 유지 해주어야 한다. ...펼친다.
  const arr = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const num = 7;
  const arr3 = [...arr, ...arr2, num];
  console.log(arr3); // 1,2,3,4,5,6,7

  // spread를 사용하지 않으면, 2차원 배열이 된다.
  const arr4 = [arr, arr2];
  console.log(arr4); // array1, array2

  // spread연산자 예시3
  // 객체에서의 spread 사용법
  const obj1 = {
    a: 1,
    b: 2,
  };

  const number = 3;

  const newObj = {
    ...obj1,
    number,
  };
  console.log(newObj);
}
spread();

// rest 연산자 자주 사용하진 않는다. 매개변수가 몇개가 올지 모르는 상황.. 다양한 상황일때!! 사용한다.
function rest() {
  const add = (a, b, ...rest) => {
    console.log(a);
    console.log(b);
    console.log(rest);
    // return a+b;
  };
  add(4, 5);
  add(4, 5, 6, 7, 8, 9, 10); // 매개변수가 넘치면 rest 배열에 담긴다.
}
rest();

// destructuring 분해하다.
function destructuring() {
  const obj = {
    key: "value",
  };

  const obj2 = {
    ...obj,
    newKey: "value2",
  };

  const numbers = {
    a: 1,
    b: 2,
    c: 3,
  };
  const result = numbers.a + numbers.b + numbers.c;
  console.log(result);

  // destructuring
  const { a, b, c } = numbers;
  const result2 = a + b + c;
  console.log(result2);
  const minus = a - b - c;
  console.log(minus);
}
destructuring();

// map, filter, reduce, includes, find, findIndex

// includes
function includes() {
  // 배열안에 있는지 없는지 확인 하는 함수 return 값으로 boolean을 갖는다.
  const arr = ["a", "b", "c"];
  const isAIncludes = arr.includes("a");
  console.log(isAIncludes);
}
includes();

// map 은 항상 return을 해주어야 값이 담기게 됩니다.
// forEach를 사용하는 것보다 map을 사용하는 이유는 불변성을 지키기 위해서!
// 배열 하나하나를 조작할 때 사용한다.
function map1() {
  let arr = ["a", "b", "c"];
  const result = arr.map((item, idx) => {
    console.log(item, "item");
    console.log(idx, "index");
  });
  // console.log(result);

  const animals = ["cat", "dog"];
  const isCat = animals.map((animal) => {
    if (animal === "cat") {
      return true;
    } else {
      return false;
    }
  });
  console.log(isCat);
}
map1();

// filter
// 내가 원하는 조건으로 걸러서 새로운 변수에 할당 받는다.
function filter1() {
  const arr = [1, 2, 3, 4, 5];
  const result = arr.filter((item) => {
    if (item % 2 === 0) {
      return item;
    }
  });
  console.log(result); // 2, 4
}

filter1();

// reduce 왼쪽에서 오른쪽으로 간다.
// reduceRight 오른쪽에서 왼쪽으로 간다.
function reduce1() {
  const arr = [1, 2, 3];
  const result = arr.reduce((acc, curr, idx) => {
    console.log(acc, "누적값");
    // console.log(curr, "현재값");
    // console.log(idx, "인덱스");
    return acc + curr;
  }, 0); // acc 의 초깃값을 0으로 설정 할 수 있다. 설정해주지 않으면 arr의 index 0번째 친구.
  console.log(result);
}
reduce1();

function reduce2() {
  const animals = ["cat", "dog"];
  // 누적값의 초기 값을 [] 빈배열로 선언해서 현재 값이 cat이면 true를 푸쉬 cat이 아니면 false를 푸쉬 해라.
  const reduceResult = animals.reduce((acc, curr) => {
    acc.push(curr === "cat" ? true : false);
    return acc;
  }, []);
  console.log(reduceResult);

  const mapResult = animals.map((animal) => {
    if (animal === "cat") {
      return true;
    } else {
      return false;
    }
  });
  console.log(mapResult);
}
reduce2();
