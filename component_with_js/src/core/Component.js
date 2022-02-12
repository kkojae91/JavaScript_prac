export default class Component {
  // 공통으로 관리되어야 하는 곳.
  $target;
  $props;
  state;
  constructor($target, $props) {
    this.$target = $target;
    this.$props = $props;
    this.setup();
    this.render();
    this.setEvent();
  }

  bindEventListener(type, selector, callback) {
    const children = [...document.querySelectorAll(selector)];
    const isTarget = (target) =>
      children.includes(target) || target.closest(selector);

    this.$target.addEventListener(type, (e) => {
      if (!isTarget(e.target)) return;

      e.preventDefault();
      callback(e);
    });
  }

  setup() {}

  mounted() {}

  template() {
    return ``;
  }

  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
  }

  setEvent() {}

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}
