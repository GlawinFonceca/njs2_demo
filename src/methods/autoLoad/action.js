const { AutoLoad } = require("@njs2/base");

class AutoLoadAction extends baseAction {
  async executeMethod() {
    try {
      let [testLib] = AutoLoad.loadLibray("helperLib", ["test"]);
      let result = await testLib.testFunction();

      this.setResponse("SUCCESS");
      return { result };
    } catch (e) {
      console.log("Error autoload =>", e);
    }
  }
}
module.exports = AutoLoadAction;
