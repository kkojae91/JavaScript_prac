const input = document.querySelector("#input");
const check = document.querySelector("#check");
const logs = document.querySelector("#logs");

// Math.floor() 숫자의 소숫점을 내림 해준다.
// Math.random() 0 <= X < 1 사이의 랜덤한 하나의 값을 갖는다.
// Math.floor(Math.random() * 10) 0 <= X < 10 0부터 9까지의 정수값을 랜덤하게 갖는다.
// 반복없는 랜덤한 4자리 숫자 만들기 로직

// Array(10).fill().map((v,i) => v) 함수형 프로그래밍 반복문 아래의 코드와 같다.
let numbers = [];
for (let n = 0; n <= 9; n++) {
    numbers.push(n);
}

let answer = [];
for (let n = 0; n <= 3; n++) {
    const index = Math.floor(Math.random() * numbers.length);
    // numbers array의 index를 answer에 push 해준다.
    answer.push(numbers[index]);
    // .splice(index, 1) index의 자리에 있는 친구를 1개 없앤다는 의미.
    numbers.splice(index, 1)
}

console.log(answer);
// 아래의 while 문보다는 for 문이 한눈에 보기 좋아 더 많이 사용한다.

// let n = 0;
// while (n <= 3) {
//     // random 한 값의 index를 한번 실행 할때마다 -1 씩 줄여준다. splice를 하기 때문에 -n 을 해주지 않으면, undefined가 생기게 된다.
//     const index = Math.floor(Math.random() * (10 - n));
//     // numbers array의 index를 answer에 push 해준다.
//     answer.push(numbers[index]);
//     // .splice(index, 1) index의 자리에 있는 친구를 1개 없앤다는 의미.
//     numbers.splice(index, 1)
//     n += 1;
// }

// .join("") 을 통해 array를 string화 시킬 수 있다. ""빈공간을 기준으로 배열안의 것들을 문자열로 만들어줘라.
// answer[0]+answer[1]+answer[2]+answer[3]; === answer.join("")
// answer.join("");

// "*".repeat(2); >> *을 2번 반복해라.

let count = 0;
check.addEventListener("click", () => {
    const value = input.value; // input의 벨류는 항상 string.
    // value 그리고 value.length === 4  두개다 참일 경우. 분기가 조건이 같을때 조건문의 댑스를 줄여주는게 좋다.
    // && and 연산자 // || or 연산자 
    if (value && value.length === 4) {
        if (answer.join("") === value) {
            // appendChild(document.createTextNode("HR")) 은 기존에 있던 문자 뒤에 새롭게 문자를 생성해준다.
            // logs.appendChild(document.createTextNode("HR"));
            // textContent는 기존에 있던 문자들을 다 삭제하고 "HR"로 바꿔준다.
            logs.textContent = "HR";
        } else {
            console.log("다르다");
            let strike = 0;
            let ball = 0;
            for (const [numIndex, number] of answer.entries()) {
                for (const [strIndex, string] of value.split("").entries()) {
                    if (number === Number(string)) {
                        if (numIndex === strIndex) {
                            strike += 1;
                        } else {
                            ball += 1;
                        }
                    }
                }
            }
            const message = document.createTextNode(`${value} : ${strike} strike ${ball} ball`);
            logs.appendChild(message);
            // 줄바꿈을 위해 <br> tag를 생성해준다.
            logs.appendChild(document.createElement("br"));
            if (count > 10) {
                logs.appendChild(document.createTextNode(`Game Over: ${answer.join("")}`));
            } else {
                count += 1
            }
        }
    }
});
