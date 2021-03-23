/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const users = require('../services/user');
module.exports = {

  getUsers: function (req, res) {
    console.log('aaaaaa');
    return res.json({ users: users.getAll() });
  }

};

