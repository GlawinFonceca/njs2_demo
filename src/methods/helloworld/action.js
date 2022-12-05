class HelloworldAction extends baseAction {
  async executeMethod() {
    try {
      let { inpVals } = this;

      this.setResponse("SUCCESS");
      return "hello world";
    } catch (e) {
      console.log("Error helloworld =>", e);
    }
  }
}
module.exports = HelloworldAction;
