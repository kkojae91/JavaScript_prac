'use strict';

const CARROT_SIZE = 80;
const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const GAME_DURATION_SEC = 5;

const field = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect();
const gameButton = document.querySelector('.game__button');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');

let started = false;
let score = 0;
let timer = undefined;

gameButton.addEventListener('click', () => {
  console.log('gameButton');
  if (started) {
    stopGame();
  } else {
    startGame();
  }
  // started가 true이면 false가 할당 되고, false이면 true가 할당 됩니다.
  started = !started;
});

function startGame() {
  initGame();
  showStopButton();
  showTimerAndScore();
  startGameTimer();
}

function stopGame() {}

function showStopButton() {
  const icon = gameButton.querySelector('.fa-play');
  icon.classList.add('fa-stop');
  icon.classList.remove('fa-play');
}

function showTimerAndScore() {
  gameTimer.style.visibility = 'visible';
  gameScore.style.visibility = 'visible';
}

function startGameTimer() {
  let remainingTimeSec = GAME_DURATION_SEC;
  updateTimerText(remainingTimeSec);
  timer = setInterval(() => {
    if (remainingTimeSec <= 0) {
      // 조건에 해당하게 되면 clearInterval() API를 통해 setInterval()함수 실행을 멈춰 주고
      clearInterval(timer);
      // return을 해줌으로써 아래의 updateTimerText()가 또 실행되지 않게 만들어 준다.
      return;
    }
    // callback 함수가 호출 된 뒤 -1 씩 감소 시켜준다.
    updateTimerText(--remainingTimeSec);
  }, 1000);
}

function updateTimerText(time) {
  // Math.floor(숫자) 숫자를 내림해주는 함수. time이 65이면 1이 된다. 이걸 분으로 계산해서 변수에 담아주고,
  const minutes = Math.floor(time / 60);
  // seconds에는 time이 65이면 60으로 나눈 나머지 값을 변수에 할당 해준다.
  const seconds = time % 60;
  gameTimer.innerText = `${minutes}:${seconds}`;
}

function initGame() {
  // start누를때 마다 새롭게 reset 되게 끔! innerHTML을 비워 준다.
  field.innerHTML = '';
  // 게임이 시작되면, 당근의 갯수가 나와야한다.
  gameScore.innerText = CARROT_COUNT;
  // 벌레와 당근을 생성한 뒤 field에 추가해준다.
  // console.log(fieldRect);
  addItem('carrot', CARROT_COUNT, './assets/img/carrot.png');
  addItem('bug', BUG_COUNT, './assets/img/bug.png');
}

function addItem(className, count, imagePath) {
  const x1 = 0;
  const y1 = 0;
  const x2 = fieldRect.width - CARROT_SIZE;
  const y2 = fieldRect.height - CARROT_SIZE;
  for (let i = 0; i < count; i++) {
    const item = document.createElement('img');
    item.setAttribute('class', className);
    item.setAttribute('src', imagePath);
    item.style.position = 'absolute';
    const x = randomNumber(x1, x2);
    const y = randomNumber(y1, y2);
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    field.appendChild(item);
  }
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
