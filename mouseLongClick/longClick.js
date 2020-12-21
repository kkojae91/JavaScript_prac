"use strict";
const plusEle = document.querySelector("#plus");
const minusEle = document.querySelector("#minus");
let isPressed = false;

plusEle.addEventListener("mouseup", function (event) {
  isPressed = false;
});

plusEle.addEventListener("mousedown", function (event) {
  isPressed = true;
  doInterval("1");
});

minusEle.addEventListener("mouseup", function (event) {
  isPressed = false;
});

minusEle.addEventListener("mousedown", function (event) {
  isPressed = true;
  doInterval("-1");
});

function doInterval(action) {
  if (isPressed) {
    // var countEle = document.querySelector("#count");
    count.value = parseInt(count.value) + parseInt(action);

    setTimeout(function () {
      doInterval(action);
    }, 200);
  }
}

// 여기서 부터 우리가 사용해야하는 코드....
const click = document.querySelector(".click");
let isPress = false;
let pressTimer;
let counter = 0;

click.addEventListener("touchend", () => {
  // console.log("mousedown");
  isPress = true;
  pressTimer = setInterval(() => {
    counter++;
    console.log(counter);
    clickFunc();
  }, 1000);
});

click.addEventListener("touchmove", () => {
  console.log("mouseup");
  clearInterval(pressTimer);
  isPress = false;
  counter = 0;
});

function clickFunc() {
  if (isPress && counter === 2) {
    alert("눌렸습니다!");
    console.log("눌렸습니다.");
  }
}
