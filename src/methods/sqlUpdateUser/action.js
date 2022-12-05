const { AutoLoad } = require("@njs2/base");

class SqlUpadateUserAction extends baseAction {
  async executeMethod() {
    try {
      let [userLib] = AutoLoad.loadLibray("sqlLib", ["user"]);
      let { user_id, user_name, gender } = this;
      let user = await userLib.getUserDetails(user_id);
      let userUpdates = {
        user_name,
        gender,
      };
      if (user) {
        await userLib.updateUsers({user_id}, userUpdates);
        this.setResponse("SUCCESS");
        return { userUpdates };
      } else {
        this.setResponse("FAILED");
        return "unsuccessfull";
      }
    } catch (e) {
      console.log("Error saqlUpdateUser =>", e);
    }
  }
}
module.exports = SqlUpadateUserAction;
