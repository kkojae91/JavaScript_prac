'use strict';

import * as sound from './sound.js';

const CARROT_SIZE = 80;

export const ItemType = new Object.freeze({
  carrot: 'carrot',
  bug: 'bug',
});

export class Field {
  constructor(carrotCount, bugCount) {
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;
    this.field = document.querySelector('.game__field');
    this.fieldRect = this.field.getBoundingClientRect();
    // this 바인딩
    // this.onClick = this.onClick.bind(this);
    this.field.addEventListener('click', (event) => this.onClick(event));
  }

  init() {
    // start누를때 마다 새롭게 reset 되게 끔! innerHTML을 비워 준다.
    this.field.innerHTML = '';
    this._addItem('carrot', this.carrotCount, './assets/img/carrot.png');
    this._addItem('bug', this.bugCount, './assets/img/bug.png');
  }

  setClickListener(onItemClick) {
    this.onItemClick = onItemClick;
  }

  _addItem(className, count, imagePath) {
    const x1 = 0;
    const y1 = 0;
    const x2 = this.fieldRect.width - CARROT_SIZE;
    const y2 = this.fieldRect.height - CARROT_SIZE;
    for (let i = 0; i < count; i++) {
      const item = document.createElement('img');
      item.setAttribute('class', className);
      item.setAttribute('src', imagePath);
      item.style.position = 'absolute';
      const x = randomNumber(x1, x2);
      const y = randomNumber(y1, y2);
      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
      this.field.appendChild(item);
    }
  }

  onClick(event) {
    const target = event.target;
    // matches('.className') 해당하는 타겟의 className이 carrot이라면!
    if (target.matches('.carrot')) {
      // 당근!!
      target.remove();
      sound.playCarrot();
      this.onItemClick && this.onItemClick(ItemType.carrot);
    } else if (target.matches('.bug')) {
      // 벌레!!
      this.onItemClick && this.onItemClick(ItemType.bug);
    }
  }
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
