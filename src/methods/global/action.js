
class GlobalAction extends baseAction {
  async executeMethod() {
    try {
      let frameWork = GLB.FRAMEWORK;

      this.setResponse("SUCCESS");
      return frameWork;
    } catch (e) {
      console.log("Error global =>", e);
    }
  }
}
module.exports = GlobalAction;
