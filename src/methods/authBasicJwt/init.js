
class AuthBasicJwtInitalize extends baseInitialize {

  constructor() {
    super();
    this.initializer =  {};
    this.initializer.isSecured = true; // values: true/false
    this.initializer.requestMethod = ['GET']; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {
      "inpVals": {
        "name": "inp_vals",
        "type": "string",
        "description": "inp_vals",
        "required": false,
        "default": ""
      },
    };

    return { ...param };
  }
}

module.exports = AuthBasicJwtInitalize;