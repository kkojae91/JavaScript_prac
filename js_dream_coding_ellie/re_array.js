"use strict";

// Array ✨

// 1. Declearation
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length); // 2
console.log(fruits[0]); // 🍎
console.log(fruits[1]); // 🍌
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // 마지막요소 받아오기.

console.clear();
// 3. Looping over an array
// print all fruits
// 3-a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 3-b. for of
for (let fruit of fruits){
    console.log(fruit);
}

// 3-c. forEach
// forEach는 콜백함수를 호출한다.(첫번째인자는:value,두번째인자는:index)
fruits.forEach(function(fruit, index){
    console.log(fruit, index);
})
// short coding
// 우리가 필요한건 과일이니 index는 생략하고, fruit만 가지고 온다. 
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push("🍓","🍑");
console.log(fruits); // "🍎", "🍌", "🍓", "🍑"

// pop: remove an item from the end
fruits.pop();
console.log(fruits); // "🍎", "🍌", "🍓"
fruits.pop();
console.log(fruits); // "🍎", "🍌"

// unshift: add an item to the begining
fruits.unshift("🍓","🍋");
console.log(fruits);  // "🍓", "🍋", "🍎", "🍌"

// shift: remove an item from the begining
fruits.shift();
console.log(fruits); // "🍋", "🍎", "🍌"
fruits.shift();
console.log(fruits);  // "🍎", "🍌"


// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push("🍓", "🍑", "🍋"); // "🍎", "🍌", "🍓", "🍑", "🍋"
console.log(fruits);
// splice는 뒤에 인자를 넣지 않으면 1번째 인덱스부터 뒤로 전부 다 지워 버린다.
fruits.splice(1, 1);
console.log(fruits);  // "🍎", "🍓", "🍑", "🍋"
// splice 3번째~ 인자들은 삽입할 요소들을 적어주면된다.
// (1, 0) 1번째 인덱스 자리에 아무것도 삭제하지말고 뒤에 것들을 추가해줘!
fruits.splice(1,0,"🍏","🍉");
console.log(fruits);  // "🍎", "🍏", "🍉", "🍓", "🍑", "🍋"

// combine two arrays
// 2개의 배열을 합치는 방법
const fruits2 = ["🍐","🥝"];
// concat은 return값을 갖기 때문에 변수에 할당 해주어야 한다.
const newFruits = fruits.concat(fruits2);
console.log(newFruits); // "🍎", "🍏", "🍉", "🍓", "🍑", "🍋", "🍐", "🥝"

// 5.Searching
// indexOf: find the index
console.clear();
console.log(fruits); //"🍎", "🍏", "🍉", "🍓", "🍑", "🍋"
console.log(fruits.indexOf("🍎")); // 0
console.log(fruits.indexOf("🍉")); // 2
console.log(fruits.indexOf("🥝")); // -1 없는것을 찾게 되면 -1 을 반환 하게 된다.

// includes 배열에 포함하고 있는지 확인하는 함수, 
console.log(fruits.includes("🍉")); // true
console.log(fruits.includes("🥝")); //false

// lastIndexOf
console.clear();
console.log(fruits); //"🍎", "🍏", "🍉", "🍓", "🍑", "🍋"
fruits.push("🍎");
console.log(fruits); // "🍎", "🍏", "🍉", "🍓", "🍑", "🍋", "🍎"
console.log(fruits.indexOf("🍎")); // 0 같은 값이 있다면 가장 앞에 있는 친구의 인덱스 번호를 반환
console.log(fruits.lastIndexOf("🍎")) // 6 lastIndexOf 같은 값이 있다면 가장 마지막에 있는 친구의 인덱스 번호를 반환

