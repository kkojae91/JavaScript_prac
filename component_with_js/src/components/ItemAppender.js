import Component from "../core/Component.js";

export default class ItemAppender extends Component {
  template() {
    return `
    <input type="text" class="appender" placeholder="아이템 내용 입력" />
    <button class="addBtn">추가</button>
    `;
  }

  setEvent() {
    const { addItem } = this.$props;

    this.bindEventListener("keyup", ".appender", ({ key, target }) => {
      if (key !== "Enter") return;
      addItem(target.value);
    });

    this.bindEventListener("click", ".addBtn", () => {
      addItem(document.querySelector(".appender").value);
    });
  }
}
