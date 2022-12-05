class PostmanAction extends baseAction {
  async executeMethod() {
    try {
      let { x, y } = this;

      this.setResponse("SUCCESS");
      return `x is :${x} and y is : ${y}`;
    } catch (e) {
      console.log("Error postman =>", e);
    }
  }
}
module.exports = PostmanAction;
