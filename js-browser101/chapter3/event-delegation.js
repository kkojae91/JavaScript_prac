'use strict';

// Bad
// const lis = document.querySelectorAll('li');
// lis.forEach((li) => {
//   li.addEventListener('click', () => {
//     li.classList.add('selected');
//   });
// });

// 부모안에 자식들에게 공통적으로 무언가를 처리해야할때는 자식요소를 SelectorAll을 통해 다 가지고 오는 것 보다.
// 부모요소에 event를 설정한 후 조건문으로 자식요소의 태그일 경우 이벤트를 발생시켜주는게 좋습니다.

// Cool method eventBubbling을 활용 한 것!
// 이벤트 위임! (eventDelegation)
const ul = document.querySelector('ul');
ul.addEventListener('click', (event) => {
  console.log(event.target.tagName);
  if (event.target.tagName == 'LI') {
    event.target.classList.add('selected');
  }
});
