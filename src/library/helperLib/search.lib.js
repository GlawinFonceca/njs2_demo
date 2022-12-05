class search {
  async getUser(user_id) {
    try {
      //returns one element from 'user' table whose user_id is 'user_id'
      return await SQLManager.findOne("jwt_users", { user_id: user_id });
    } catch (e) {
      console.log("Error search =>", e);
    }
  }
}

module.exports = search;
