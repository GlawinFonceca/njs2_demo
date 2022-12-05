
class DecryptInitalize extends baseInitialize {

  constructor() {
    super();
    this.initializer =  {};
    this.initializer.isSecured = false; // values: true/false
    this.initializer.requestMethod = ['GET']; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {
      data: {
        name: "data",
        type: "string",
        description: "encrypted data",
        required: false,
        default: ""
      },
    };

    return { ...param };
  }
}

module.exports = DecryptInitalize;