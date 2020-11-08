const input = document.querySelector("#input");
const check = document.querySelector("#check");
const logs = document.querySelector("#logs");

// Math.floor() 숫자를 내림 해준다.
// Math.random() 0 <= X < 1 사이의 랜덤한 하나의 값을 갖는다.
// Math.floor(Math.random() * 10) 0 <= X < 10 0부터 9까지의 정수값을 랜덤하게 갖는다.
let answer = [];
let n = 0;
while (n <= 3) {
    answer[n] = Math.floor(Math.random() * 10);
    n += 1;
}
console.log(answer);

// .join("") 을 통해 array를 string화 시킬 수 있다. ""빈공간을 기준으로 배열안의 것들을 문자열로 만들어줘라.
// answer[0]+answer[1]+answer[2]+answer[3]; === answer.join("")
answer.join("");

// "*".repeat(2); >> *을 2번 반복해라.

let count = 0;
check.addEventListener("click", () => {
    const value = input.value; // input의 벨류는 항상 string.
    // value 그리고 value.length === 4  두개다 참일 경우. 분기가 조건이 같을때 조건문의 댑스를 줄여주는게 좋다.
    // && and 연산자 // || or 연산자 
    if (value && value.length === 4) {

    }
});
