"use strict";
const outer = document.querySelector(".outer");
const middle = document.querySelector(".middle");
const button = document.querySelector("button");

outer.addEventListener("click", (event) => {
  if (event.target !== event.currentTarget) {
    return;
  }
  console.log(`outer: ${event.currentTarget}, ${event.target}`);
});

middle.addEventListener("click", (event) => {
  if (event.target !== event.currentTarget) {
    return;
  }
  console.log(`middle: ${event.currentTarget}, ${event.target}`);
});

button.addEventListener("click", (event) => {
  // event.target과 event.currentTarget이 같을 경우만 evnetListener 실행
  if (event.target !== event.currentTarget) {
    return;
  }
  console.log(`button: ${event.currentTarget}, ${event.target}`);
  // event의 버블링을 막아주지만 정말 정말 나쁜 친구들 (본인만 처리하는 것...)
  // event.stopPropagation();
  // event.stopImmediatePropagation();
});
