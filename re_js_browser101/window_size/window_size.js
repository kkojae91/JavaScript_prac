"use strict";
const box = document.querySelector(".box");

function update_box() {
  box.innerHTML = `
  window.screen: ${window.screen.width}, ${window.screen.height} <br/>
  window.outer: ${window.outerWidth}, ${window.outerWidth} <br/>
  window.inner: ${window.innerWidth}, ${window.innerHeight} <br/>
  documentElement.clientWidth: ${document.documentElement.clientWidth}
  `;
}

window.addEventListener("resize", () => {
  update_box();
});
update_box();

// console.log(`window.screen: ${window.screen.width}, ${window.screen.height}`);
// console.log(`window.outer: ${window.outerWidth}, ${window.outerWidth}`);
// console.log(`window.inner: ${window.innerWidth}, ${window.innerHeight}`);
// console.log(`documentElement.clientWidth: ${document.documentElement.clientWidth}`);
