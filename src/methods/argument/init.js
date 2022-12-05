
class ArgumentInitalize extends baseInitialize {

  constructor() {
    super();
    this.initializer =  {};
    this.initializer.isSecured = false; // values: true/false
    this.initializer.requestMethod = ['GET']; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {
      first_argument: {
        name: "first",
        type: "string",
        description: "first argument",
        required: true,
        default: ""
      },
      second_argument: {
        name: "second",
        type: "number",
        description: "second argument",
        required: false,
        default: 7543
      }
    };

    return { ...param };
  }
}

module.exports = ArgumentInitalize;