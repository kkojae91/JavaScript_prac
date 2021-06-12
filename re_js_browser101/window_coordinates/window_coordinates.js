"use strict";

const special = document.querySelector(".special");
console.log(special.getBoundingClientRect());

special.addEventListener("click", (event) => {
  const rect = special.getBoundingClientRect();
  console.log(rect);
  console.log(event);
  console.log(`client X, Y : ${event.clientX}, ${event.clientY}`);
  console.log(`page X, Y : ${event.pageX}, ${event.pageY}`);
  // console.log(event.clientX);
  // console.log(event.clientY);
  // console.log(event.pageX);
  // console.log(event.pageY);
});

const scrollBy = document.querySelector(".scroll_by");
const scrollTo = document.querySelector(".scroll_to");
const scrollInto = document.querySelector(".scroll_into");
const buttons = document.querySelector(".buttons");

// 100px 씩 이동
// scrollBy.addEventListener("click", () => {
//   window.scrollBy({ top: 100, left: 0, behavior: "smooth" });
// });

// 100px 로 이동
// scrollTo.addEventListener("click", () => {
//   window.scrollTo({ top: 100, left: 0, behavior: "smooth" });
// });

// 특정 위치로 이동
// scrollInto.addEventListener("click", () => {
//   special.scrollIntoView({ behavior: "smooth" });
// });

// 이벤트 위임
buttons.addEventListener("click", (event) => {
  // console.log(event);
  switch (event.target) {
    case scrollBy:
      // console.log(scrollBy);
      window.scrollBy({ top: 100, left: 0, behavior: "smooth" });
      break;
    case scrollTo:
      // console.log(scrollTo);
      window.scrollTo({ top: 100, left: 0, behavior: "smooth" });
      break;
    case scrollInto:
      // console.log(scrollInto);
      special.scrollIntoView({ behavior: "smooth" });
      break;
  }
});
