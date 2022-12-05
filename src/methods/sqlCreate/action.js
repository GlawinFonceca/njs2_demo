const { AutoLoad } = require("@njs2/base");

class SqlCreateAction extends baseAction {
  async executeMethod() {
    try {
      let [userLib] = AutoLoad.loadLibray("sqlLib", ["user"]);
      let { user_id, user_name, gender } = this;
      let new_user = {
        user_id,
        user_name,
        gender,
      };
      await userLib.create(new_user);

      this.setResponse("SUCCESS");
      return { new_user };
    } catch (e) {
      console.log("Error sqlCreate =>", e);
    }
  }
}
module.exports = SqlCreateAction;
