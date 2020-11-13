'use strict';

// Promise is a JavaScript object for asynchronous operation.
// State: pending -> fullfilled or rejected
// Producer vs Cunsumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work(network, read files)
  console.log('doing something...');
  setTimeout(() => {
    // resolve('kkojae');
    reject(new Error('no network'));
  }, 2000);
});

// 2.Cunsumers: then, catch, finally 를 통해 값을 받아올 수 있다.
// promise.then: promise가 잘 실행이 되면 resolve값이 value의 파라미터 값으로 들어온다.
// promise.catch: promise가 잘 실행되지 않고 error가 발생하면 reject의 값이 error 파라미터의 값으로 들어온다.
// promise.finally: promise가 성공하든 실패하든 무조건 실행되는 코드.(마지막에 실행 됬으면 하는 것을 넣어 주면 된다.)
promise //
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  .then((hen) => getEgg(hen))
  .catch((error) => {
    return '🍌';
  })
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal))
  .catch((error) => console.log(error));
