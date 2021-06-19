"use strict";

const section = document.querySelector("section");
const h2 = document.createElement("h2"); // h2 tag 생성
h2.setAttribute("class", "title"); // <h2 class='title'></h2>
h2.textContent = "This is title"; // <h2 class='title'>This is title</h2>
// 가장 끝 부분에 요소가 추가 된다.
// section.appendChild(h2);

// h3 요소 이전에 h2 요소를 추가한다.
const h3 = document.querySelector("h3");
section.insertBefore(h2, h3);

// h2 요소를 삭제한다.
section.removeChild(h2);

// 한번에 업데이트한 후 변경할 일이 없다면, innerHTML을 사용하는게 좋다.
// section.innerHTML = `
//   <img src="img/avatar.png" alt="avatar" />
//   <h1 id='brand'>Kkojae</h1>
// `
