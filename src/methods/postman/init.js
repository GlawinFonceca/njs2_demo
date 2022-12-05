
class PostmanInitalize extends baseInitialize {

  constructor() {
    super();
    this.initializer =  {};
    this.initializer.isSecured = false; // values: true/false
    this.initializer.requestMethod = ['POST']; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {
      x: {
        name: "x",
        type: "number",
        description: "inp_vals",
        required: true,
        default: ""
      },
      y: {
        name: "y",
        type: "string",
        description: "inp_vals",
        required: false,
        default: ""
      },
    };

    return { ...param };
  }
}

module.exports = PostmanInitalize;