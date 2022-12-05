class CustomRouteAction extends baseAction {
  async executeMethod() {
    try {
      this.setResponse("SUCCESS");
      return "CUSTOM_ROUTE MESSAGE";
    } catch (e) {
      console.log("Error customRoutes =>", e);
    }
  }
}
module.exports = CustomRouteAction;
