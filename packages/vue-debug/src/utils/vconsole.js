export default {
  vConsole: "",
  init() {
    if (!this.vConsole) {
      const VConsole = require("vconsole");
      this.vConsole = new VConsole();
    }
    return this.vConsole;
  },
  destroy() {
    if (this.vConsole) {
      this.vConsole.destroy();
      this.vConsole = "";
    }
    return null;
  }
};
