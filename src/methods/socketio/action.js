class SocketioAction extends baseAction {
  async executeMethod() {
    try {
      this.setResponse("SUCCESS");
      return { ALL_USERS: GLB.SOCKET_ID_ARRAY };
    } catch (e) {
      console.log("Error socketio =>", e);
    }
  }
}
module.exports = SocketioAction;
