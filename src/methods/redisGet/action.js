class RedisGetAction extends baseAction {
  async executeMethod() {
    try {
      let { user_id } = this;
      let user;
      user = await REDISManager.getKey(user_id);
      if (!user) {
        this.setResponse("INVALID_USER");
        return {};
      }

      this.setResponse("SUCCESS");
      return user;
    } catch (e) {
      console.log("Error redisGet =>", e);
    }
  }
}
module.exports = RedisGetAction;
