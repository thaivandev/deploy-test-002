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
  },
  createUser: async (req, res) => {
    const bcrypt = require('bcrypt');
    const userContent = req.body;
    Users.find({ email: userContent.email }).exec(async (err, user) => {
      if (err) {
        return res.serverError({
          success: false,
          message: 'Server Error' + err
        });
      }

      if (user && user.length) {
        return res.ok({
          success: false,
          message: 'User exits'
        });
      }

      const saltRounds = 10;
      const newPassword = await bcrypt.hashSync(userContent.password, saltRounds);

      const createUser = {
        ...userContent,
        password: newPassword,
        token: await sails.helpers.generateJwt.with({
          user: userContent,
          secretSignature: 'secret',
          tokenLife: '1h'
        })
      };

      try {
        const result = await Users.create(createUser).fetch();
        return res.ok({
          success: true,
          data: result
        });
      } catch (error) {
        return res.serverError({
          success: false,
          message: 'Server Error' + error
        });
      }


    });
  },

  users: async (req, res) => {
    Users.find((err, user) => {
      if (err) {
        return res.serverError({
          success: false,
          message: 'Server Error' + err
        });
      }

      if (typeof user === 'undefined') {
        return res.status(404).json({
          success: false,
          message: 'Not found'
        });
      }
      return res.ok({
        success: true,
        data: user
      });
    });
  },

  login: async (req, res) => {
    const bcrypt = require('bcrypt');
    // const translate = require("translate");
    // const bar = await translate("Hello world", { to: "es" });
    // console.log('translate', bar);
    const data = req.body;
    console.log('translate', data);

    await Users.findOne({ email: data.email}).exec(async (err, userData) => {
      if (err) {
        return res.serverError({
          success: false,
          message: 'Server Error' + err
        });
      }

      if (!userData) {
        return res.status(404).json({
          success: false,
          message: 'Not found User!'
        });
      }

      const match = await bcrypt.compare(data.password, userData.password);

      if (!match) {
        return res.status(400).json({
          success: false,
          message: 'Pass wrong'
        });
      }

      console.log('token 96', userData);

      const token = await sails.helpers.generateJwt.with({
        user: {
          email: userData.email,
          userName: userData.userName
        },
        secretSignature: 'secret',
        tokenLife: '1h'
      });

      console.log('token 96', token, userData);

      const refreshToken = await sails.helpers.generateJwt.with({
        user: {
          email: userData.email,
          userName: userData.userName
        },
        secretSignature: 'secret',
        tokenLife: '2h'
      });

      await Users.updateOne({ email: data.email }).set({
        token,
        refreshToken,
      });

      return res.ok({
        success: true,
        data: {
          token,
          refreshToken
        }
      });
    });
  }

};

