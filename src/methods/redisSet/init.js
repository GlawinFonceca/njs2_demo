class RedisSetInitalize extends baseInitialize {
  constructor() {
    super();
    this.initializer = {};
    this.initializer.isSecured = false; // values: true/false
    this.initializer.requestMethod = ["POST"]; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {
      user_id: {
        name: "user_id",
        type: "string",
        description: "id for cache",
        required: true,
        default: "1",
      },
    };

    return { ...param };
  }
}

module.exports = RedisSetInitalize;
