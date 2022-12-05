class SocketIoConnectAction extends baseAction {
  async executeMethod() {
    try {
      let { socket_id } = this;

      //adding socket id to array
      GLB.SOCKET_ID_ARRAY.push(socket_id);

      //broadcasting to all sockets
      GLB.SOCKET_ID_ARRAY.map((s_id) => {
        SOCKETManager.emit(s_id, "newly connected socket_id" + socket_id);
      });

      this.setResponse("SUCCESS");
      return {};
    } catch (e) {
      console.log("Error socketIoConnect =>", e);
    }
  }
}
module.exports = SocketIoConnectAction;
