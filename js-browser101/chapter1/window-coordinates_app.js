'use strict';

const target = document.querySelector('.target');

target.addEventListener('click', (event) => {
  const rect = target.getBoundingClientRect(); // target div의 domrect전체의 정보가 담겨 있다.
  console.log(rect);
  console.log(`page: ${event.pageX}, ${event.pageY}`); // 139, 1951 (전체 브라우져 창안에서의 click 된 위치)
  console.log(`client: ${event.clientX}, ${event.clientY}`); // 139, 365 (현재 창에서의 click 된 위치)
});

const scrollBy100 = document.querySelector('.scrollBy100');
const scrollTo100 = document.querySelector('.scrollTo100');
const scrollIntoSpecial = document.querySelector('.scrollIntoSpecial');

scrollBy100.addEventListener('click', () => {
  // window.scrollBy(0, 100);
  window.scrollBy({ top: 100, left: 0, behavior: 'smooth' });
});

scrollTo100.addEventListener('click', () => {
  window.scrollTo(0, 100);
});

scrollIntoSpecial.addEventListener('click', () => {
  target.scrollIntoView();
});
