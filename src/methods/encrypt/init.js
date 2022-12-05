
class EncryptInitalize extends baseInitialize {

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
        description: "data for encryption",
        required: true,
        default: ""
      },
    };

    return { ...param };
  }
}

module.exports = EncryptInitalize;