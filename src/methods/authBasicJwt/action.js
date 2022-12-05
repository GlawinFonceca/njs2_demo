class AuthBasicJwtAction extends baseAction {
  async executeMethod() {
    try {
      let { userObj } = this;

      this.setResponse("SUCCESS");
      return { user_id: userObj.user_id };
    } catch (e) {
      console.log("Error authBasicJwt =>", e);
    }
  }
}
module.exports = AuthBasicJwtAction;
