class MongodbCreateUserAction extends baseAction {
  async executeMethod() {
    try {
      let { user_id, user_name } = this;
      const [userLib] = AutoLoad.loadLibray("mongodbLib", ["user"]);

      const result = await userLib.createUser({
        user_name: user_name,
        user_id: user_id,
      });

      this.setResponse("SUCCESS");
      return { result };
    } catch (e) {
      console.log("Error mongodbCreateUser =>", e);
    }
  }
}
module.exports = MongodbCreateUserAction;
