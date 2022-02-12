const $app = document.querySelector("#app");

const bindEventListener = (type, selector, callback) => {
  const children = [...document.querySelectorAll(selector)];
  const isTarget = (target) =>
    children.includes(target) || target.closest(selector);

  $app.addEventListener(type, (e) => {
    if (!isTarget(e.target)) return;

    e.preventDefault();
    callback(e);
  });
};

let state = {
  items: ["item1", "item2", "item3", "item4"],
};

const render = () => {
  const { items } = state;
  $app.innerHTML = `
    <ul>
      ${items.map((item) => `<li>${item}</li>`).join("")}
    </ul>
    <button id='append'>추가</button>
  `;

  bindEventListener("click", "#append", () => {
    setState({ items: [...items, `item${items.length + 1}`] });
  });
};

const setState = (newState) => {
  state = { ...state, ...newState };
  render();
};

render();
