class AppComponent {
  constructor() {
    this.$app = document.querySelector("#app");
    this.state = { items: ["item1", "item2"] };

    this.render();
  }

  render() {
    const { items } = this.state;
    this.$app.innerHTML = `
      <ul>
        ${items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <button id="append">추가</button>
    `;

    this.bindEventListener("click", "#append", () => {
      this.setState({ items: [...items, `item${items.length + 1}`] });
    });
  }

  bindEventListener(type, selector, callback) {
    const children = [...document.querySelectorAll(selector)];
    const isTarget = (target) =>
      children.includes(target) || target.closest(selector);

    this.$app.addEventListener(type, (e) => {
      if (!isTarget(e.target)) return;

      e.preventDefault();
      callback(e);
    });
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };

    this.render();
  }
}

new AppComponent();
