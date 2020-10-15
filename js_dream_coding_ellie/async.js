// async & await
// clear style of using promise :)
// 무조건 promise 보다 async가 좋다고 말할 수 없다.
// promise를 사용해야할 때와 async를 사용해야할 때를 구분해야합니다.

// 1. async

// promise methods
// function fetchUser(){
//     return new Promise((resolve, reject) => {
//         resolve("kkojae");
//     })
// }

// asynchronous methods
// async를 함수 앞에 붙여주면 자동으로 promise를 만들어준다.
async function fetchUser() {
    // do network request in 10 secs....
    return "kkojae";
}

const user = fetchUser();
// 아래의 두 코드는 동일한 기능,,, 하나의 인자를 전달하는 건 생략 가능합니다.
user.then((name) => console.log(name))
user.then(console.log)

// 2. await
// async가 있어야 await을 사용할 수 있다.

// ms를 인자로 받아 ms뒤에 return 해주는 delay function
function delay(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// await은 delay가 끝날때 까지, 기다려준 다음에 return 값을 던져준다.
async function getApple(){
    await delay(1000);
    return "apple-IMG";
}

async function getBanana(){
    await delay(5000);
    return "banana-IMG";
}

const apple = getApple();
apple.then(apple => console.log(apple));

const banana = getBanana();
banana.then(banana => console.log(banana));

// callback what the hell
function hellPickFruits(){
    return getApple().then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`)
    })
}
hellPickFruits().then(fruits => console.log(fruits));

// useing async function
async function pickFruits(){
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}
pickFruits().then(fruits => console.log(fruits));

// useful Promise APIs 

// Promise.all()
// 병렬처리.. apple과 banana를 실행하는데 두 함수가 연관 관계가 없다면,
// Promise.all(['','']) Array형태를 사용하여 동시에 실행시킬 수 있다
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join(' + '));
}
pickAllFruits().then(allFruits => console.log(`pickAllFruits : ${allFruits}`));

// Promise.race()
// 병렬처리하는데 먼저 끝나는 함수만을 return 해준다.
function pickOnlyOneFruit(){
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOneFruit().then(fruit => console.log(`pickOnlyOne : ${fruit}`));