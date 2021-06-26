"use strict";

const items = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__button");

/**
 * 코드를 설명하는 주석은 남겨 놓지 않고 함수가 하는 일을 주석으로 남겨주는게 좋다.
 */
function onAdd() {
  // 1. 사용자가 입력한 텍스트를 받아온다.
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }
  // 2. 새로운 아이템을 만든다. (텍스트 + 삭제 버튼)
  const item = createItem(text);
  // 3. items 컨테이너 안에 새로 만든 아이템을 추가한다.
  items.appendChild(item);
  // 4. 새로 추가된 아이템으로 스크롤링
  item.scrollIntoView({ block: "center" });
  // 5. input을 초기화 한다.
  input.value = "";
  input.focus();
}

let id = 0; // UUID
function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");
  itemRow.setAttribute("data-id", id);
  itemRow.innerHTML = `
    <div class="item">
      <span class="item__name">${text}</span>
      <button class="item__delete">
        <i class="fas fa-trash-alt" data-id=${id}></i>
      </button>
    </div>
    <div class="item__divider"></div>
  `;
  id++;
  return itemRow;
}

function eventListener() {
  addBtn.addEventListener("click", () => {
    onAdd();
  });

  input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      onAdd();
    }
  });

  items.addEventListener("click", (event) => {
    const id = event.target.dataset.id;
    if (id) {
      const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
      toBeDeleted.remove();
    }
  });
}

function init() {
  eventListener();
}

init();
