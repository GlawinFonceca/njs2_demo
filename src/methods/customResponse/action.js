class CustomResponseAction extends baseAction {
  async executeMethod() {
    try {
      let { inpVals } = this;

      this.setResponse("CUSTOM_RESPONSE");
      return {};
    } catch (e) {
      console.log("Error customResponse =>", e);
    }
  }
}
module.exports = CustomResponseAction;
