
class SqlReadUserInitalize extends baseInitialize {

  constructor() {
    super();
    this.initializer =  {};
    this.initializer.isSecured = false; // values: true/false
    this.initializer.requestMethod = ['GET']; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {
      user_id: {
        name: "user_id",
        type: "number",
        description: "user id",
        required: true,
        default: ""
      },
    };

    return { ...param };
  }
}

module.exports = SqlReadUserInitalize;