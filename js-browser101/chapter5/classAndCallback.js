'use strict';

// class 재사용성!
// callback 함수를 인자로 받아서 constructor에 선언 해준다.
class Counter {
  constructor(runEveryFiveTimes) {
    this.counter = 0;
    this.callback = runEveryFiveTimes;
  }

  // class 안에서 function을 만들땐 function은 생략한다.
  increase() {
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      // callback function이 전달 된다면 아래를 실행 하고 없다면 실행 하지 말아라!
      // if (this.callback){
      //   this.callback(this.counter);
      // 위의 코드를 한줄로 작성하면 아래와 같다
      // }
      this.callback && this.callback(this.counter);
    }
  }
}

function printSomething(number) {
  console.log(`Yo! ${number}`);
}

function alertNumber(number) {
  alert(`alert! ${number}`);
}

// 인스턴스 생성
const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNumber);

printCounter.increase(); // 1
printCounter.increase(); // 2
printCounter.increase(); // 3
printCounter.increase(); // 4
printCounter.increase(); // 5, Yo! 5
