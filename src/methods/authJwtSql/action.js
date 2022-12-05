
class AuthJwtSqlAction extends baseAction {
  async executeMethod() {
    try {
      let { userObj } = this;

      this.setResponse("SUCCESS");
      console.log(userObj);
      return { userObj };

    } catch (e) {
      console.log("Error authJwtSql =>", e);
    }
  }
}
module.exports = AuthJwtSqlAction;
