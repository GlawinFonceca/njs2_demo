class MongodbUpdateUserAction extends baseAction {
  async executeMethod() {
    try {
      let { user_id, user_name } = this;
      const [userLib] = AutoLoad.loadLibray("mongodbLib", ["user"]);

      const result = await userLib.updateUser(
        { user_id: user_id }, // query
        { user_name: user_name }, //Updated data
        { new: true } //Option to return updated data
      );

      if (!result) {
        this.setResponse("INVALID_USER");
        return "failed";
      }

      this.setResponse("SUCCESS");
      return { result };
    } catch (e) {
      console.log("Errror mongodbUpdateUser =>", e);
    }
  }
}
module.exports = MongodbUpdateUserAction;
