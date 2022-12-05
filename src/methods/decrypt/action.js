const { AutoLoad } = require("@njs2/base");

class DecryptAction extends baseAction {
  async executeMethod() {
    try {
      let [decryptLib] = AutoLoad.loadLibray("helperLib", ["decode"]);
      let { data } = this;
      let decodedData = decryptLib.decryptText(data);
      console.log(decodedData);
      this.setResponse("SUCCESS");
      return { ...this };
    } catch (e) {
      console.log("Error decrypt =>", e);
    }
  }
}
module.exports = DecryptAction;
