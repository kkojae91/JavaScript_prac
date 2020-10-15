"use strict";

// Promise is a JavaScript object for asynchronous operation.
// 비동기 처리시 callback함수 대신에 유용하게 사용할 수 있음.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
// promise를 생성하면 자동으로 실행된다.
// 사용자가 버튼을 눌렀을때, 서버와 통신을 해야하는 로직에는 알맞지 않다.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log("doing something...");
    setTimeout(() => {
        // resolve("kkojae");
        reject(new Error("no network"));
    }, 2000)
});

// 2. Consumers: then, catch, finally
// then -> promise가 정상적으로 잘 실행되서 resolve의 값을 value값으로 받아온다.
// catch -> promise가 정상적으로 작동되지 않을때, reject를 catch에서 실행시켜준다.
// finally -> promise의 결과가 어떻던간에 무조건 실행, 
// promise가 정상적이면 resolve실행 후 finally역시 실행, promise가 작동하지 않으면 reject실행 후 finally역시 실행.
promise
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("finally");
    });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1),1000);
});

fetchNumber
    .then((num) => num * 2)
    .then((num) => num * 3)
    .then((num) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then((num) => console.log(num)); // 5

// 4. Error Handling
const getHen = (() => new Promise((resolve, reject) => {
    setTimeout(() => resolve("chicken-IMG"), 1000);
}));

const getEgg = ((hen) => new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} => egg-IMG`), 1000);
    setTimeout(() => reject(`error ${hen} => egg-IMG`), 1000);
}));

const cook = ((egg) => new Promise((resolve, reject) =>{
    setTimeout(() => resolve(`${egg} => friedEggs-IMG`), 1000);
}));

// getHen()
//     .then((hen) => getEgg(hen))
//     .then((egg) => cook(egg))
//     .then((meal) => console.log(meal));
// 위의 코드와 아래의 코드는 동일한 코드 입니다.
getHen() // 전달하는 인자가 1개일 경우에는 암묵적으로 생략해서 사용 할 수 있습니다.
    .then(getEgg)
    // .catch((error) => `(${error}) ---replace---> ("bread-IMG")`) //getEgg에서 error가 발생했을때 바로밑에 catch를 작성해주면, 대신해서 작성된 return 값을 전달해서 그 뒤로 실행됩니다.
    .then(cook)
    .then(console.log)
    .catch(console.log);