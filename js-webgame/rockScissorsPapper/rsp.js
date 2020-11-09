const computerTag = document.querySelector("#computer");
computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) 0 0`;

let computerChoice = "rock";
// 객체.
// rspCoord["rock"] === rspCoord.rock [""] 이걸 사용하면 [변수]를 사용 할 수 있다.
const rspCoord = {
    rock: "0",
    scissors: "-142px",
    papper: "-284px"
};

// 반복되는 값을 제거 해주기위해 함수로 묶어준다.
// 바로 변수에 할당하게 되면, Id값이 할당되기 때문에 익명함수의 return 값으로 저장 해주어야 한다.
const intervalMaker = () => {
    return setInterval(() => {
        if (computerChoice === "rock") {
            computerChoice = "scissors";
        } else if (computerChoice === "scissors") {
            computerChoice = "papper";
        } else if (computerChoice === "papper") {
            computerChoice = "rock";
        }
        computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${rspCoord[computerChoice]} 0`;
    }, 50);
}

// setInterval함수를 변수에 담아주면 setInterval을 멈추기위한 id값을 할당하게 된다.
// click event에 clearInterval(intervalId)를 해주게 되면 setInterval 함수 실행이 멈추게 된다.
let intervalId = intervalMaker();

const rockTag = document.querySelector("#rock");
const scissorsTag = document.querySelector("#scissors");
const papperTag = document.querySelector("#papper");

// 임의의 규칙 만들기.
// 가위 :1 바위: 0 보: -1 이라고 정하고. (각각의 경우를 빼준값 행렬 화)
// 내가 이기는 경우와 컴퓨터가 이기는 경우를 비교.
// 나|컴퓨터 가위 바위 보
//     가위  0  1   2
//     바위 -1  0   1
//      보 -2  -1   0
// 내가 이기는 경우 2 -1
// 내가 비기는 경우 0
// 내가 지는 경우  1 -2

const score = {
    rock: 0,
    scissors: 1,
    papper: -1
}

// 함수가 다른 함수를 리턴하게 만들기 (고차함수)
const clickButton = (myChoice) => {
    return () => {
        clearInterval(intervalId);
        const myScore = score[myChoice];
        const computerScore = score[computerChoice];
        const diff = myScore - computerScore;
        const scoreTag = document.querySelector("#score");
        // 누적점수 변수 textContent로 값을 가지고오면 항상 String
        let accScore = Number(scoreTag.textContent);
        if (diff === 2 || diff === -1) {
            // 내가 이긴 경우
            accScore += 1;
        } else if (diff === -2 || diff === 1) {
            // 내가 진 경우
            accScore -= 1;
        }
        // 이긴 경우 or 진 경우 의 점수를 다시 화면에 입력 해준다.
        scoreTag.textContent = accScore;
        setTimeout(() => {
            intervalId = intervalMaker();
        }, 1000)

        // 모든 함수는 return 값이 생략될 수 있다 생략된 값은 undefined;
        // return undefined;
    }
};

// 위의 코드와 아래의 코드는 동일하게 동작합니다. {}다음에 return 이 오면 {}는 생략 가능 return 생략 가능
// const clickButton = (myChoice) => () => {
//         const myScore = score[myChoice];
//         const computerScore = score[computerChoice];
//         const diff = myScore - computerScore;
//         const scoreTag = document.querySelector("#score");
//         let accScore = Number(scoreTag.textContent);
//         if (diff === 2 || diff === -1) {
//             accScore += 1;
//         } else if (diff === -2 || diff === 1) {
//             accScore -= 1;
//         }
//         scoreTag.textContent = accScore;
// };

rockTag.addEventListener("click", clickButton("rock"));
scissorsTag.addEventListener("click", clickButton("scissors"));
papperTag.addEventListener("click", clickButton("papper"));