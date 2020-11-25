'use strict';

const section = document.querySelector('section');
const h2 = document.createElement('h2');
h2.setAttribute('class', 'title'); // <h2 class='title'></h2>
h2.textContent = 'This is a title'; //<h2 class='title>This is a title</h2>
// section의 마지막 자식요소로 h2를 추가 시켜준다.
section.appendChild(h2);
// 요소 사이에 새로만든 요소를 넣고 싶을땐 insertBefore를 사용한다.
const h3 = document.querySelector('h3');
// h3 이전에 h2를 넣어줘라! insertBefore(넣어야할 요소, 기준이되는 요소)
section.insertBefore(h2, h3);
// removeChild(tag명) element를 삭제해준다.
section.removeChild(h2);

// innerHTMl 기존의 section의 html을 아래 작성한것으로 바꿔준다.
section.innerHTML = `
  <h1>Kkojae</h1>
  <div>jaejeung3210</div>
`;

// 전체적으로 변화를 주어야할 때는 innerHTML을 사용하는게 좋고 또한 한번 업데이트 후 변화를 주지 않을때 사용해주는게 좋다.
// 부분적으로 변화를 주어야할 때는 Element.textContent를 사용해주는게 좋다.
