
class SqlCreateInitalize extends baseInitialize {

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
      user_name: {
        name: "user_name",
        type: "string",
        description: "user name",
        required: true,
        default: ""
      },
      gender: {
        name: "gender",
        type: "string",
        description: "user gender",
        required: true,
        default: ""
      },
    };

    return { ...param };
  }
}

module.exports = SqlCreateInitalize;