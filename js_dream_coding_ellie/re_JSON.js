// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)  --> object를 json 형식으로 변환 하는 것!
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);   // ["apple","banana"]
console.log(typeof json);  // string

const rabbit = {
    name: "tori",
    color: "white",
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${this.name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
// 자바스크립트에만 있는 고유한 symbol 또는 함수는 json 형식에 반영되지 않는다.
console.log(json);   // {"name":"tori","color":"white","size":null,"birthDate":"2020-11-12T11:45:16.898Z"}

// replacer --> json형식으로 변환할 때 사용자 정의를 할 수 있다. 함수 혹은 배열을 통해.
json = JSON.stringify(rabbit, ["name"]); // name이라는 property만 가지고 가고 싶을땐 배열에 담아서 표현해주면 된다.
console.log(json);  // {"name":"tori"}

console.clear();
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    // ? 를 통한 조건문 key가 name이면 kkojae로 해주고 그렇지 않으면 value값 그대로 해줘라.
    return key === "name" ? "kkojae" : value;
})

console.log(json);  //  {"name":"kkojae","color":"white","size":null,"birthDate":"2020-11-12T11:55:58.514Z"}


// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);  // {name: "tori", color: "white", size: null, birthDate: "2020-11-12T11:58:17.228Z"}
rabbit.jump();
// obj.jump(); //typeError obj.jump is not a function

console.log(rabbit.birthDate.getDate());  // 12
// rabbit 객체를 생성후 JSON 변환시 문자열로 저장되기 때문에 Date()가 가지고 있는 함수들은 사용할 수 없다. 문자열이기 때문!
// console.log(obj.birthDate.getDate()); //  typeError obj.birthDate.getDate() is not a function.
console.log(obj.birthDate);  // 2020-11-12T12:03:40.492Z
// 하지만 reviver callback function을 활용하게 된다면,

// parse의 reviver, stringify의 replace 둘다 기본적으로 return 값을 설정할땐 value를 해주어야 한다.
const obj2 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    // key가 birthDate이면 new Date(value) value를 new Date() 객체에 넣어서 추후 new Date()함수의 메서드를 사용할 수 있게 만들어 주는 아주 유용한 함수이다.
    return key === "birthDate" ? new Date(value) : value;
    // return value;  --> default 값은 return value;
});
console.log(obj2.birthDate);  // Thu Nov 12 2020 21:09:15 GMT+0900 (대한민국 표준시)
console.log(obj2.birthDate.getDate()); // 12
