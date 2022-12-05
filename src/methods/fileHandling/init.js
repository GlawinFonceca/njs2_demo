
class FileHandlingInitalize extends baseInitialize {

  constructor() {
    super();
    this.initializer =  {};
    this.initializer.isSecured = false; // values: true/false
    this.initializer.requestMethod = ['GET']; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {
      fileObject: {
        name: "file",
        type: "document",
        description: "uploading file",
        required: true,
        default: ""
      },
    };

    return { ...param };
  }
}

module.exports = FileHandlingInitalize;