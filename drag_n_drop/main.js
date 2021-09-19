const listItemEls = document.querySelectorAll(".list-item");
const listEls = document.querySelectorAll(".list");

let draggedItem = null;

for (let i = 0; i < listItemEls.length; i++) {
  const itemEl = listItemEls[i];

  itemEl.addEventListener("dragstart", function () {
    console.log("dragstart");
    draggedItem = itemEl;
    setTimeout(() => {
      // itemEl.style.display = "none";
      itemEl.style.opacity = 0.5;
    }, 0);
  });

  itemEl.addEventListener("dragend", function () {
    console.log("dragend");
    setTimeout(() => {
      // itemEl.style.display = "block";
      itemEl.style.opacity = 1;
      draggedItem = null;
    }, 0);
  });

  for (let j = 0; j < listEls.length; j++) {
    const listEl = listEls[j];

    listEl.addEventListener("dragover", (event) => {
      event.preventDefault();
    });

    listEl.addEventListener("dragenter", (event) => {
      event.preventDefault();
      listEl.style.backgroundColor = "rgba(0,0,0,0.2)";
    });

    listEl.addEventListener("dragleave", (event) => {
      listEl.style.backgroundColor = "rgba(0,0,0,0.1)";
    });

    listEl.addEventListener("drop", (event) => {
      console.log("drop");
      listEl.appendChild(draggedItem);
      listEl.style.backgroundColor = "rgba(0,0,0,0.1)";
    });
  }
}
