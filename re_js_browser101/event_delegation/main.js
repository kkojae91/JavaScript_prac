"use strict";
// Bad Case
// const lis = document.querySelectorAll("li");
// lis.forEach((li) => {
//   li.addEventListener("click", () => {
//     li.classList.add("selected");
//   });
// });

// Good Case
const ul = document.querySelector("ul");
ul.addEventListener("click", (event) => {
  console.log(event.target.tagName);
  if (event.target.tagName == "LI") {
    event.target.classList.add("selected");
  }
});
