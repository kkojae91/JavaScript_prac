// async & await
// clear style of using promise

// 1.async
function fetchUser() {
  return new Promise((resolve, reject) => {
    // do network request in 10 secs...
    resolve('kkojae');
  });
}

const user = fetchUser();
console.log(user);
user.then((user) => console.log(user));

// 위의 promise를 아래와 같이 function 앞에 async를 선언해서 사용할 수 있다.
// JS가 자동적으로 promise를 생성해준다.
async function fetchUser2() {
  // do network request in 10 secs...
  return 'jaejae';
}

const user2 = fetchUser2();
console.log(user2);
user2.then((user) => console.log(user));

// 2. await✨

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return '🍎';
}

async function getBanana() {
  await delay(1000);
  return '🍌';
}

// 아래의 코드는 getBanana를 Promise를 활용해 .then을 사용한 코드입니다.
// function getBanana(){
//   return delay(3000).then(()=>'🍌');
// }

function pickFruits() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `fruits1 ${apple} + ${banana}`);
  });
}

pickFruits().then((fruits) => console.log(fruits));

// 위의 prikFruits function보다 2초 빠르게 실행 된다.
async function pickFruits2() {
  // promise를 먼저 실행 시킨후 await을 해주면 병렬적으로 처리가 가능합니다. (각각의 promise가 서로 연관이 없을 때 이렇게 사용하면 쓸때없는 시간을 단축 시킬 수 있습니다.)
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `fruits2 ${apple} + ${banana}`;
}

pickFruits2().then((fruits) => console.log(fruits));

// 위의 병렬 처리를 조금 더 효과적으로 쓰는 API가 있다.
// 3. useful APIs

// 3-a. Promise.all
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(' + ')
  );
}
pickAllFruits().then((pickFruits) => console.log(pickFruits));

// 3-b. Promise.race
// 가장 먼저 실행된 promise 하나만을 리턴해준다.
// 시간이 동시에 끝나게 되면, 선언이 먼저 되있는게 출력됩니다.
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then((fruit) => console.log(fruit));
