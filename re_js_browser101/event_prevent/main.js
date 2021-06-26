"use strict";

const checkBox = document.querySelector("input");
checkBox.addEventListener("click", (event) => {
  console.log("chekced!");
  // window에서 기본적으로 실행되는 기능을 막는다. checkbox에는 check가 되고 안되고가 있지만, 실행되지 않음.
  // event.preventDefault();
});

// 굉장히 빠르게 처리해야하는 휠반응 같은 경우 preventDefault를 사용할 수 없지만 passive 옵션을 false로 설정한다면, 가능하다.
// 하지만 passive 속성이 기본적으로 true인 경우를 false로 변경하지 않은 것이 좋다.
document.addEventListener(
  "wheel",
  (event) => {
    console.log("scrolling");
    event.preventDefault();
  },
  { passive: false }
);
