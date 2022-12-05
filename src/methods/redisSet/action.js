class RedisSetAction extends baseAction {
  async executeMethod() {
    try {
      let { user_id } = this;

      const result = await REDISManager.setKey(
        user_id,
        "test data to store in redis"
      );

      this.setResponse("SUCCESS");
      return { result };
    } catch (e) {
      console.log("Error redisSet =>", e);
    }
  }
}
module.exports = RedisSetAction;
