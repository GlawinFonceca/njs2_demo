
class RestApiInitalize extends baseInitialize {

  constructor() {
    super();
    this.initializer =  {};
    this.initializer.isSecured = false; // values: true/false
    this.initializer.requestMethod = ['GET']; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {
      user_id: {
        name: "userid",
        type: "number",
        description: "user id",
        required: true,
        default: ""
      },
    };

    return { ...param };
  }
}

module.exports = RestApiInitalize;