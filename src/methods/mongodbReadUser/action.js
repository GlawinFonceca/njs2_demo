const { AutoLoad } = require("@njs2/base");

class MongodbReadUserAction extends baseAction {
  async executeMethod() {
    try {
      let { user_id } = this;
      let [userLib] = AutoLoad.loadLibray("mongodbLib", ["user"]);
      const user = await userLib.getUser({ user_id });
      if (user) {
        this.setResponse("SUCCESS");
        return { user };
      } else {
        this.setResponse("INVALID_USER");
        return "user not found";
      }
    } catch (e) {
      console.log("Error mongodbReadUser =>", e);
    }
  }
}
module.exports = MongodbReadUserAction;
