class RestApiAction extends baseAction {
  async executeMethod() {
    try {
      let { user_id } = this;

      this.setResponse("SUCCESS");
      return `user id is : ${user_id}`;
    } catch (e) {
      console.log("Error restApi =>", e);
    }
  }
}
module.exports = RestApiAction;
