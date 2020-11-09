// 45개의 undefined를 가진 array생성
// fill(0) 0을 넣으면, 0이 45개 비워두면 undefined 1을 넣으면 1이 45개인 array
// map() 은 배열에 사용할 수 있다.
// const arr = [1,2,3];
// arr.map((v) => {return v*10})  --->  [10,20,30]
// arr.map(v => v * 10)  ---> [10,20,30] 소괄호 중괄호 return 생략가능 간편하게 사용할 수 있다.
// value는 매개변수 value의 이름은 아무 이름이나 써도 된다.
// index는 2번째 매개변수 index의 값을 갖는다. 0~44 +1 을 해주면 1~45까지의 숫자를 가진 배열을 만들 수 있다.
const candidate = Array(45).fill().map((value, index) => index + 1);
const shuffle = [];

while (candidate.length > 0) {
    // splice의 결과 값은 array 형태 값이 1개라도 array형태로 반환 한다. [0] 필수 
    // splice(1, 2) index 1인 자리부터 2가지 를 꺼내온다. 
    const value = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
    shuffle.push(value);
}

console.log(shuffle);
// slice(0, 6) array의 index 0~5 까지의 값을 winBalls에 할당한다.
// sort()  --> 정렬을 사전순으로 해서 일반 숫자를 정렬할때 조심해야한다.
// sort((prev,curr) => prev-curr) --> 오름차순 정렬
// sort((prev,curr) => curr-prev) --> 내림차순 정렬
const winBalls = shuffle.slice(0, 6).sort((prev, curr) => prev - curr);
// shuffle[6] index 6의 자리를 bonus에 할당한다. 
const bonus = shuffle[6];
console.log(winBalls);
console.log(bonus);

// colorize 함수를 만들어서 반복 되는 부분을 줄여 준다.
const colorize = (number, tag) => {
    if (number <= 10) {
        tag.style.backgroundColor = "red";
        tag.style.color = "#fff"
    } else if (number <= 20) {
        tag.style.backgroundColor = "orange";
    } else if (number <= 30) {
        tag.style.backgroundColor = "yellow";
    } else if (number <= 40) {
        tag.style.backgroundColor = "blue";
        tag.style.color = "#fff"
    } else {
        tag.style.backgroundColor = "green";
        tag.style.color = "#fff"
    }
}

const resultTag = document.querySelector("#result");
// for (let i = 0; i <= 5; i++) {
//     // setTimeout(()=>{},ms) 몇 초 뒤에 실행 할 것인가?
//     setTimeout(() => {
//         const ball = document.createElement("div");
//         ball.className = "ball";
//         colorize(winBalls[i], ball);
//         ball.textContent = winBalls[i];
//         resultTag.appendChild(ball);
//         // *i+1 을 해주지 않는다면, 1초뒤에 한번에 쫘라락 뜬다. 
//     }, 1000 * (i + 1))
// }

// 위의 코드를 forEach((number, index) => { }) 문으로 사용 할 수 있다.
// forEach는 array의 반복문입니다.
winBalls.forEach((number, index) => {
    setTimeout(() => {
        const ball = document.createElement("div");
        ball.className = "ball";
        colorize(number, ball);
        ball.textContent = number;
        resultTag.appendChild(ball);
    }, 1000 * (index + 1))
})

const bonusTag = document.querySelector(".bonus");
setTimeout(() => {
    const bonusBall = document.createElement("div");
    bonusBall.className = "ball";
    colorize(bonus, bonusBall);
    bonusBall.textContent = bonus;
    bonusTag.appendChild(bonusBall);
}, 7000)

