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

const popUp = document.querySelector('.pop-up');
const popUpMessage = document.querySelector('.pop-up__message');
const popUpRefresh = document.querySelector('.pop-up__refresh');

const carrotSound = new Audio('./assets/sound/carrot_pull.mp3');
const alertSound = new Audio('./assets/sound/alert.wav');
const bgSound = new Audio('./assets/sound/bg.mp3');
const bugSound = new Audio('./assets/sound/bug_pull.mp3');
const winSound = new Audio('./assets/sound/game_win.mp3');

let started = false;
let score = 0;
let timer = undefined;

// event delegation 이벤트 위임을 통해 벌레와 당근 클릭 이벤트를 따로 설정해주지 않고 fieldClick이벤트 하나로 설정 해준다.
// (event) => onFeildClick(event) ==>> onFieldClick 이렇게 짧게 작성할 수 있다.
field.addEventListener('click', onFieldClick);

gameButton.addEventListener('click', () => {
  // console.log('gameButton');
  if (started) {
    stopGame();
  } else {
    startGame();
  }
  // started가 true이면 false가 할당 되고, false이면 true가 할당 됩니다.
  // started = !started;
  // 여기에서 해주기 보다는 startGame, stopGame 함수에서 true, false를 할당해준다.
});

popUpRefresh.addEventListener('click', () => {
  startGame();
  hidePopUp();
});

function startGame() {
  started = true;
  initGame();
  showStopButton();
  showTimerAndScore();
  startGameTimer();
  playSound(bgSound);
}

function stopGame() {
  started = false;
  stopGameTimer();
  hideGameButton();
  showPopUpWithText('REPLAY❓');
  playSound(alertSound);
  stopSound(bgSound);
}

function finishGame(win) {
  started = false;
  hideGameButton();
  if (win) {
    playSound(winSound);
  } else {
    playSound(bugSound);
  }
  stopGameTimer();
  stopSound(bgSound);
  showPopUpWithText(win ? 'You Won 🎉' : 'You Lost 💩');
}

function showStopButton() {
  const icon = gameButton.querySelector('.fas');
  icon.classList.add('fa-stop');
  icon.classList.remove('fa-play');
  gameButton.style.visibility = 'visible';
}

function hideGameButton() {
  gameButton.style.visibility = 'hidden';
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
      // 타임이 종료 되면 finishGame()을 호출 당근개수와 스코어가 같다면 true, 다르다면 false
      finishGame(CARROT_COUNT === score);
      // return을 해줌으로써 아래의 updateTimerText()가 또 실행되지 않게 만들어 준다.
      return;
    }
    // callback 함수가 호출 된 뒤 -1 씩 감소 시켜준다.
    updateTimerText(--remainingTimeSec);
  }, 1000);
}

function stopGameTimer() {
  clearInterval(timer);
}

function updateTimerText(time) {
  // Math.floor(숫자) 숫자를 내림해주는 함수. time이 65이면 1이 된다. 이걸 분으로 계산해서 변수에 담아주고,
  const minutes = Math.floor(time / 60);
  // seconds에는 time이 65이면 60으로 나눈 나머지 값을 변수에 할당 해준다.
  const seconds = time % 60;
  gameTimer.innerText = `${minutes}:${seconds}`;
}

function showPopUpWithText(text) {
  popUpMessage.innerText = text;
  popUp.classList.remove('pop-up--hide');
}

function hidePopUp() {
  popUp.classList.add('pop-up--hide');
}

function initGame() {
  // 항상 score는 0으로 초기화
  score = 0;
  // start누를때 마다 새롭게 reset 되게 끔! innerHTML을 비워 준다.
  field.innerHTML = '';
  // 게임이 시작되면, 당근의 갯수가 나와야한다.
  gameScore.innerText = CARROT_COUNT;
  // 벌레와 당근을 생성한 뒤 field에 추가해준다.
  // console.log(fieldRect);
  addItem('carrot', CARROT_COUNT, './assets/img/carrot.png');
  addItem('bug', BUG_COUNT, './assets/img/bug.png');
}

function onFieldClick(event) {
  // game이 시작되지 않았을땐, 바로 return 해줘서 click event를 실행하지 못하게 한다.
  if (!started) {
    return;
  }
  // console.log(event);
  const target = event.target;
  // matches('.className') 해당하는 타겟의 className이 carrot이라면!
  if (target.matches('.carrot')) {
    // 당근!!
    // 당근을 지우고 스코어 점수를 올린다.
    target.remove();
    score++;
    playSound(carrotSound);
    updateScoreBoard();
    if (score === CARROT_COUNT) {
      finishGame(true);
    }
  } else if (target.matches('.bug')) {
    // 벌레!!
    stopSound(bgSound);
    finishGame(false);
  }
}

function playSound(sound) {
  // currentTime = 0으로 설정해줘서 항상 처음 부터 사운드가 들리게 해준다.
  sound.currentTime = 0;
  sound.play();
}

function stopSound(sound) {
  sound.pause();
}

function updateScoreBoard() {
  // gameScore안에 기존의 당근 개수 - 점수 를 넣어준다.
  gameScore.innerText = CARROT_COUNT - score;
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
