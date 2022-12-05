const fs = require("fs");
class FileHandlingAction extends baseAction {
  async executeMethod() {
    try {
      let { fileObject } = this;

      const path = process.cwd() + "/Assets/Uploads/" + fileObject.filename;
      const content = fileObject.content;

      fs.writeFileSync(path, content, (error) => {
        if (error) console.log("error in createion of file ", error.message);
      });

      this.setResponse("SUCCESS");
      return {
        file_uploaded_url: path,
      };
    } catch (e) {
      console.log("Error fileHandling =>", e);
    }
  }
}
module.exports = FileHandlingAction;
