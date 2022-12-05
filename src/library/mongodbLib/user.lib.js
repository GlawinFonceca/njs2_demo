const { initUserModel } = require("../mongodbLib/model/user");
class user {
  async createUser(data) {
    try {
      let userModel = await initUserModel();
      let newUser = new userModel(data);
      return newUser.save();
    } catch (e) {
      console.log(e);
    }
  }

  async getUser(query, options = []) {
    try {
      let userModel = await initUserModel();
      return await userModel.findOne(query).lean();
    } catch (e) {
      console.log(e);
    }
  }

  async updateUser(query, data, options = {}) {
    try {
      let userModel = await initUserModel();
      return await userModel.findOneAndUpdate(query, data, options);
    } catch (e) {
      console.log(e);
    }
  }

  async deleteUser(query) {
    try {
      let userModel = await initUserModel();
      return await userModel.findOneAndDelete(query);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = user;
