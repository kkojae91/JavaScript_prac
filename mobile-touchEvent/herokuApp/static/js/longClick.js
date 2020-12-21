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
let isTouch = false;
let pressTimer;
let counter = 0;

// click.addEventListener("mousedown", () => {
//   // console.log("mousedown");
//   isPress = true;
//   pressTimer = setInterval(() => {
//     counter++;
//     console.log(counter);
//     clickFunc();
//   }, 1000);
// });

// click.addEventListener("mouseup", () => {
//   console.log("mouseup");
//   clearInterval(pressTimer);
//   isPress = false;
//   counter = 0;
// });

click.addEventListener("touchstart", () => {
  // console.log("mousedown");
  isTouch = true;
  pressTimer = setInterval(() => {
    counter++;
    console.log(counter);
    clickFunc();
  }, 1000);
});

click.addEventListener("touchend", () => {
  console.log("mouseup");
  clearInterval(pressTimer);
  isTouch = false;
  counter = 0;
});

const dis = document.querySelector(".display");

function clickFunc() {
  if (isTouch && counter > 1) {
    // alert("눌렸습니다!");
    console.log("눌렸습니다.");
    dis.style.display = "block";
    clearInterval(pressTimer);
    createElem();
  }
}

function createElem() {
  let div = document.createElement("div");
  let a = document.createElement("a");
  a.setAttribute("href", "www.naver.com");
  a.textContent = "네이버";
  div.append(a);
  document.querySelector("body").append(div);
}
