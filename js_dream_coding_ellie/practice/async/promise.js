"use strict";

// Promise is a Javascript object for asynchronous operation
// state: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work(network, read files)
  console.log("doing something...");
  setTimeout(() => {
    resolve("kkojae");
    reject(new Error("no network"));
  }, 2000);
});

// 2. Consumer: then, catch, finally
promise //
  .then((value) => {
    // 성공했을 땐 then을 수행.. resolve안의 값을 가지고 놀 수 있음
    console.log(value);
  })
  .catch((error) => {
    // 실패했을 땐 catch를 수행.. reject error값을 출력할 수 있음
    console.log(error);
  })
  .finally(() => {
    // promise가 성공을 했던, 실패를 했던 어떠한 작업을 하기 위해선 finally를 사용
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});
fetchNumber //
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });
};

const getEgg = (hen) => {
  return new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} => 🥚`));
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
};

const cook = (egg) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });
};

getHen() //
  .then((hen) => getEgg(hen))
  .catch((error) => "🥖")
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal))
  .catch((error) => console.log(error));

// 위의 코드를 아래와 같이 줄여서 사용 가능 하나의 인자를 받아 그 인자를 그대로 전달 하는 경우 생략할 수 있다.
getHen() //
  .then(getEgg)
  .catch((error) => "🥖")
  .then(cook)
  .then(console.log)
  .catch(console.log);
