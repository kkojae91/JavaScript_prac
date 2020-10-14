"use strict";

// Array
// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits =["apple","banana"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length -1 ]); // 마지막 원소 접근하는 방법.

// 3. Looping over an array
// print all fruits
console.log("3.Looping over an array")
// 3-1> for
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// 3-2> for of
for (let fruit of fruits){
    console.log(fruit);
}

// 3-3> forEach
// forEach문은 value, index, array 세가지의 파라미터를 가지고 있다.
// 보통 세번째 인자의 array는 잘 사용하지 않는다.
fruits.forEach((fruit, index) => console.log(fruit, index) );

fruits.forEach((fruit, index) => {
    console.log(fruit, index);
})

fruits.forEach(function(fruit, index){
    console.log(fruit, index);
});

// 위의 세가지 코드 모두 같은 결과 값을 갖는다. 가장 위에 있는게 한줄에 작성하는 코드 일 경우 가장 깔끔한 코드?!

// 4. add, delete, copy
// push: add an item to the end
fruits.push("grape","peach");
console.log(fruits);

// pop: remove an item from the end
// pop은 맨뒤의 엘리먼트 하나를 삭제 시켜준다.
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the begining
fruits.unshift("lemon","peach");
console.log(fruits);

// shift: remove an item from the begining
fruits.shift();
fruits.shift();
console.log(fruits);

// Note! shift, unshift are slower than pop, push

// splice : remove an item by index position
// splice(시작index, 몇개)
// splice(1); >> 1번 index부터 끝까지 전부다 삭제
// splice(1,1); >> 1번 index만 삭제
// splice(1,3); >> 1번 index부터 총 3개 삭제
// splice(1,3,"melon"); >> 1번 index부터 총 3개 삭제후 그 자리에 melon 추가해준다.
// splice(1,1,"melon"); >> 1번 index를 삭제하고 그 자리에 "melon"을 추가한다.
// splice(1,0, "melon"); >> 1번 index에 "melon"을 추가해준다. 삭제 x 특정위치에 값을 넣어준다.
fruits.push("peach", "lemon", "grape");
// ["apple", "banana", "peach", "lemon", "grape"]
console.log(fruits);
// banana가 삭제되고 banana자리에 melon이 들어간다.
fruits.splice(1,1,"melon");
console.log(fruits);

// combine two arrays
// 두개의 array 합치기.
const fruits2 = ["pear","Strawberry"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5.Searching
// find the index
// fruits = ["apple", "melon", "peach", "lemon", "grape"]
console.log("5.Searching")
console.log(fruits);
// indexOf("여기") >> "여기"의 index 번호를 찾아 준다.
console.log(fruits.indexOf("lemon")); // 3
console.log(fruits.indexOf("pear")); // -1 없는 엘리먼트를 검색했을땐 -1 출력

// includes("여기")
// array 안에 "여기" 가 있으면 true 없으면 false를 return 해준다.
console.log(fruits.includes("melon"));  // true
console.log(fruits.includes("watermelon")); // false

// lastIndexOf()
// 중복되는 값이 있을때, indexOf는 가장 앞에 있는 index를 반환해준다.
// lastIndexOf()는 가장 마지막에 있는 index를 반환 해준다.
fruits.push("apple");
console.log(fruits);
console.log(fruits.indexOf("apple"));
console.log(fruits.lastIndexOf("apple"));

