'use strict';

const tag = document.querySelector('.tag');

function updateTag() {
  tag.innerHTML = `
  window.screen: ${window.screen.width}, ${window.screen.height} <br/>
  window.outer: ${window.outerWidth}, ${window.outerHeight} <br/>
  window.inner: ${window.innerWidth}, ${window.innerHeight} <br/>
  documentElement.clientWidth: ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}
  `;
}

// window창에 addEventListener('resize') ==> size가 변경 될때마다!
window.addEventListener('resize', () => {
  updateTag();
});

updateTag();
