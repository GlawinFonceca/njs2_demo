const jwt = require("jsonwebtoken");
class AuthJwtCreateAction extends baseAction {
  async executeMethod() {
    try {
      let { user_id } = this;
      let access_token = jwt.sign({user_id:user_id}, "123");
      this.setResponse("SUCCESS");
      return { access_token };
    } catch (e) {
      console.log("Error authJwtCreate =>", e);
    }
  }
}
module.exports = AuthJwtCreateAction;
