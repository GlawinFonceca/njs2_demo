const { AutoLoad } = require("@njs2/base");

class SqlReadUserAction extends baseAction {
  async executeMethod() {
    try {
      let [userDeatailsLib] = AutoLoad.loadLibray("sqlLib", ["user"]);
      let { user_id } = this;
      let user = await userDeatailsLib.getUserDetails(user_id);
      if(user){
      this.setResponse("SUCCESS");
      return { user };
      }
      else {
        this.setResponse("INVALID_USER");
        return "user not found"
      }
    } catch (e) {
      console.log("Error sqlReadUser =>", e);
    }
  }
}
module.exports = SqlReadUserAction;
