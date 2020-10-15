"use strict";
// JSON
// JavaScript Object Notation

// 1.Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple","banana"]);
console.log(json);

const rabbit = {
    name: "tori",
    color:"white",
    size: null,
    birthDate: new Date(),
    // 함수형태는 JSON으로 변환 되지 않는다.
    jump: () => {
        console.log(`${name} can jump!`);
    }
}
json = JSON.stringify(rabbit);
console.log(json);

// 2번째 인자에 배열/함수 형태가 올수 있고,
// 배열 형태에서는 json으로 변환하고 싶은 property를 넣어주면 그것 들만 json으로 변환된다.
json = JSON.stringify(rabbit, ["name","color"]);
console.log(json);

// callback 함수 사용
// array 형태보다 조금 더 새밀하게 조절 할 수 있다.
json = JSON.stringify(rabbit, (key, value) => {
    // console.log(`key: ${key}, value: ${value}`);
    return key === "name" ? "kkojae" : value ;
})
console.log(json)

// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
// rabbit을 JSON으로 변환시 함수는 포함 되지 않는다.
// 그렇게 때문에 type error가 발생함.
// obj.jump(); // type error

console.clear();
// Date() object가 가지고 있는 메소드를 사용할 수 없다.
// rabbit을 JSON으로 변환 할때 object가 string으로 변환 되기 때문.
console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); //type Error 발생
// 이것을 사용하기 위해서는 parse 할때 두번째 인자에 callback함수를 사용하면 된다.

const obj2 = JSON.parse(json, (key, value) => {
    // console.log(`key: ${key}, value: ${value}`);
    return key === "birthDate"? new Date(value) : value;
})
// 위와 같이 callback 함수에 조건을 넣어주면 object를 그대로 가지고 와서 사용할 수 있다.
console.log(obj2.birthDate.getDate());