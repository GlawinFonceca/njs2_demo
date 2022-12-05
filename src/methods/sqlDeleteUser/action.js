const { AutoLoad } = require("@njs2/base");

class SqlDeleteUserAction extends baseAction {
  async executeMethod() {
    try {
      let [userLib] = AutoLoad.loadLibray('sqlLib',['user']);
      let {user_id} = this;
      const deleted = await userLib.deleteUser(user_id);
      console.log(deleted);
      this.setResponse("SUCCESS");
      return "deleted successfully";
    } catch (e) {
      console.log("Error sqlDeleteuser =>", e);
    }
  }
}
module.exports = SqlDeleteUserAction;
