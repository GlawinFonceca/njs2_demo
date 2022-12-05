class RedisDeleteAction extends baseAction {
  async executeMethod() {
    try {
      let { user_id } = this;
      const result = await REDISManager.deleteKey(user_id);

      if (!result) {
        this.setResponse("INVALID_USER");
        return {};
      }

      this.setResponse("SUCCESS");
      return { result };
    } catch (e) {
      console.log("Error redisDelete =>", e);
    }
  }
}
module.exports = RedisDeleteAction;
