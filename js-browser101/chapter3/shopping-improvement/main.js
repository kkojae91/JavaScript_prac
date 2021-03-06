'use strict';

const items = document.querySelector('.items');
const input = document.querySelector('.footer-input');
const addButton = document.querySelector('.footer-button');

/**
 *
 */
function onAdd() {
  // 1. 사용자가 입력한 텍스트를 받아옴.
  const text = input.value;
  // 사용자의 입력값이 없다면 함수를 나가자. focus를 다시 맞춰주고 focus를 맞춰주어야한다.
  if (text === '') {
    input.focus();
    return;
  }
  // 2. 받아온 텍스트를 이용해서 새로운 아이템을 만든다(텍스트 + 삭제버튼)
  const item = createItem(text);
  // 3. items 컨테이너 안에 새로 만든 아이템을 추가한다.
  items.appendChild(item);
  // 4. 새로 추가된 아이템으로 스크롤링
  item.scrollIntoView({ behavior: 'smooth', block: 'center' });
  // 5. 입력이 완료되면 인풋을 초기화 한다. focus위치를 맞춰 준다.
  input.value = '';
  input.focus();
}

let id = 0;
function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item-row');
  itemRow.setAttribute('data-id', id);
  itemRow.innerHTML = `
    <div class='item'>
      <span class='item-name'>${text}</span>
      <button class='item-delete'>
        <i class='fas fa-trash-alt' data-id=${id}></i>
      </button>
    </div>
    <div class='item-divider'></div>`;
  id++;
  return itemRow;
}

addButton.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    onAdd();
  }
});

// event delegation (이벤트 위임!)
// ul tag 어느 곳이나 클릭해도 이벤트가 발생하게 만들어 놓은 후 조건문을 통해 휴지통을 클릭했을 때! 삭제기능을 구현
items.addEventListener('click', (event) => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.item-row[data-id='${id}']`);
    toBeDeleted.remove();
  }
});
