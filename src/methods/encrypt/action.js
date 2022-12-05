const { AutoLoad } = require("@njs2/base");

class EncryptAction extends baseAction {
  async executeMethod() {
    try {
      let [encryptLib] = AutoLoad.loadLibray("helperLib", ["encode"]);
      let { data } = this;
      let encodedData = await encryptLib.encryptText(data);

      this.setResponse("SUCCESS");
      return { encodedData };
    } catch (e) {
      console.log("Error encrypt =>", e);
    }
  }
}
module.exports = EncryptAction;
