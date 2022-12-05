class EncryptStrictAction extends baseAction {
  async executeMethod() {
    try {
      let { name } = this;

      this.setResponse("SUCCESS");
      return `Hai ${name}, welcome to Njs2 Demo project (Optional Encryption)`;
    } catch (e) {
      console.log("Error encryptStrict =>", e);
    }
  }
}
module.exports = EncryptStrictAction;
