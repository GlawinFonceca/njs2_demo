class LocalizationAction extends baseAction {
  async executeMethod() {
    try {
      this.setResponse("CUSTOM_RESPONSE");
      return "response";
    } catch (e) {
      console.log("Error localization =>", e);
    }
  }
}
module.exports = LocalizationAction;
