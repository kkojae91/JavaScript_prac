'use strict';

const outer = document.querySelector('.outer');
const middle = document.querySelector('.middle');
const button = document.querySelector('.button');

outer.addEventListener('click', (evnet) => {
  if (event.target !== event.currentTarget) {
    return;
  }
  console.log(`outer: ${event.currentTarget}, ${event.target}`);
});

middle.addEventListener('click', (event) => {
  if (event.target !== event.currentTarget) {
    return;
  }
  console.log(`middle: ${event.currentTarget}, ${event.target}`);
});

button.addEventListener('click', (event) => {
  console.log(`button1: ${event.currentTarget}, ${event.target}`);
  // 가능하면 stopPropagation(), stopImmediatePropagation()은 사용하지 않는게 좋습니다.
  // 부모 요소에 if(event.target !== event.currentTarget){return;} --> currentTarget과 target이 다르면 실행하지 못하게 막아주는게 좋습니다.
  // event Bubbling을 막아준다.
  // event.stopPropagation();
  // 나 혼자 말고는 모든 event Bubbing을 막아줘.
  // event.stopImmediatePropagation();
});

button.addEventListener('click', (event) => {
  console.log(`button2: ${event.currentTarget}, ${event.target}`);
});
