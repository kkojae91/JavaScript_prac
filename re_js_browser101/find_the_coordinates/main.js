"use strict";
const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");

addEventListener("load", () => {
  // defer option을 사용 중이라 이미지가 다운로드 되기 전에 getBoundingClientRect을 호출 할 수 있다.
  // 그럴 경우 width 0, height 0 이 되기 때문에 오류가 발생.
  const targetRect = target.getBoundingClientRect();
  const targetHarfWidth = targetRect.width / 2;
  const targetHarfHeight = targetRect.height / 2;
  // console.log(targetHarfWidth, targetHarfHeight);
  document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    // console.log(`${x}, ${y}`);

    // vertical.style.left = `${x}px`;
    // horizontal.style.top = `${y}px`;
    // 위의 코드를 아래의 코드로 성능 개선
    vertical.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;

    // target.style.left = `${x}px`;
    // target.style.top = `${y}px`;
    // 위의 코드를 아래의 코드로 성능 개선
    target.style.transform = `translate(${x - targetHarfWidth}px, ${y - targetHarfHeight}px)`;

    // tag.style.left = `${x}px`;
    // tag.style.top = `${y}px`;
    // 위의 코드를 아래의 코드로 성능 개선
    tag.style.transform = `translate(${x + 30}px, ${y + 30}px)`;
    tag.innerHTML = `${x}px, ${y}px`;
  });
});
