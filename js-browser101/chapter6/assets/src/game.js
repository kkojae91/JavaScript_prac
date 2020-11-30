'use strict';

import { Field, ItemType } from './field.js';
import * as sound from './sound.js';

export const Reason = Object.freeze({
  win: 'win',
  lose: 'lose',
  cancel: 'cancel',
});

// builder Pattern
export class GameBuilder {
  gameDuration(duration) {
    this.gameDuration = duration;
    return this;
  }

  carrotCount(num) {
    this.carrotCount = num;
    return this;
  }

  bugCount(num) {
    this.bugCount = num;
    return this;
  }

  build() {
    return new Game(
      this.gameDuration, //
      this.carrotCount,
      this.bugCount
    );
  }
}

class Game {
  constructor(gameDuration, carrotCount, bugCount) {
    this.gameDuration = gameDuration;
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;

    this.gameTimer = document.querySelector('.game__timer');
    this.gameScore = document.querySelector('.game__score');
    this.gameButton = document.querySelector('.game__button');

    this.gameButton.addEventListener('click', () => {
      // console.log('gameButton');
      if (this.started) {
        this.stop(Reason.cancel);
      } else {
        this.start();
      }
    });

    // import Field에서 가지고 온 Field class
    this.gameField = new Field(carrotCount, bugCount);
    this.gameField.setClickListener((event) => this.onFieldClick(event));

    this.started = false;
    this.score = 0;
    this.timer = undefined;
  }

  setGameStopListener(onGameStop) {
    this.onGameStop = onGameStop;
  }

  start() {
    this.started = true;
    this.initGame();
    this.showStopButton();
    this.showTimerAndScore();
    this.startGameTimer();
    sound.playBackground();
  }

  stop(reason) {
    this.started = false;
    this.stopGameTimer();
    this.hideGameButton();
    sound.stopBackground();
    this.onGameStop && this.onGameStop(reason);
  }

  onFieldClick(item) {
    if (!this.started) {
      return;
    }
    if (item === ItemType.carrot) {
      // 당근!!
      // 당근을 지우고 스코어 점수를 올린다.
      this.score++;
      this.updateScoreBoard();
      if (this.score === this.carrotCount) {
        this.stop(Reason.win);
      }
    } else if (item === ItemType.bug) {
      // 벌레!!
      sound.stopBackground();
      this.stop(Reason.lose);
    }
  }

  showStopButton() {
    const icon = this.gameButton.querySelector('.fas');
    icon.classList.add('fa-stop');
    icon.classList.remove('fa-play');
    this.gameButton.style.visibility = 'visible';
  }

  hideGameButton() {
    this.gameButton.style.visibility = 'hidden';
  }

  showTimerAndScore() {
    this.gameTimer.style.visibility = 'visible';
    this.gameScore.style.visibility = 'visible';
  }

  startGameTimer() {
    let remainingTimeSec = this.gameDuration;
    this.updateTimerText(remainingTimeSec);
    this.timer = setInterval(() => {
      if (remainingTimeSec <= 0) {
        // 조건에 해당하게 되면 clearInterval() API를 통해 setInterval()함수 실행을 멈춰 주고
        clearInterval(this.timer);
        // 타임이 종료 되면 finishGame()을 호출 당근개수와 스코어가 같다면 true, 다르다면 false
        this.stop(this.carrotCount === this.score ? Reason.win : Reason.lose);
        // return을 해줌으로써 아래의 updateTimerText()가 또 실행되지 않게 만들어 준다.
        return;
      }
      // callback 함수가 호출 된 뒤 -1 씩 감소 시켜준다.
      this.updateTimerText(--remainingTimeSec);
    }, 1000);
  }

  stopGameTimer() {
    clearInterval(this.timer);
  }

  updateTimerText(time) {
    // Math.floor(숫자) 숫자를 내림해주는 함수. time이 65이면 1이 된다. 이걸 분으로 계산해서 변수에 담아주고,
    const minutes = Math.floor(time / 60);
    // seconds에는 time이 65이면 60으로 나눈 나머지 값을 변수에 할당 해준다.
    const seconds = time % 60;
    this.gameTimer.innerText = `${minutes}:${seconds}`;
  }

  initGame() {
    // 항상 score는 0으로 초기화
    this.score = 0;
    this.gameScore.innerText = this.carrotCount;
    this.gameField.init();
  }

  updateScoreBoard() {
    // gameScore안에 기존의 당근 개수 - 점수 를 넣어준다.
    this.gameScore.innerText = this.carrotCount - this.score;
  }
}
