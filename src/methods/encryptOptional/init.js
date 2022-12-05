
class EncryptOptionalInitalize extends baseInitialize {

  constructor() {
    super();
    this.initializer =  {};
    this.initializer.isSecured = false; // values: true/false
    this.initializer.requestMethod = ['GET']; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {
      name: {
        name: "name",
        type: "string",
        description: "encryption in optional mode ",
        required: false,
        default: ""
      },
    };

    return { ...param };
  }
}

module.exports = EncryptOptionalInitalize;