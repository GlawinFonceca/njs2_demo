const { AutoLoad } = require("@njs2/base");

class MongodbDeleteUserAction extends baseAction {
  async executeMethod() {
    try {
      let { user_id } = this;
      let [userLib] = AutoLoad.loadLibray("mongodbLib", ["user"]);
      let result = await userLib.deleteUser({ user_id });
      if (!result) {
        this.setResponse("INVALID_USER");
        return "user not found";
      } else {
        this.setResponse("SUCCESS");
        return "DELETED";
      }
    } catch (e) {
      console.log("Error mongodbDeleteUser =>", e);
    }
  }
}
module.exports = MongodbDeleteUserAction;
