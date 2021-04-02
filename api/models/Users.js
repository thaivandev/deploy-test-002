/**
 * Users.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    userName: {
      'type': 'string',
      'required': true
    },
    password: {
      'type': 'string',
      'required': true
    },
    name: {
      'type': 'string',
    },
    numberPhone: {
      'type': 'string',
      'unique': true,
      'required': true
    },
    address: {
      'type': 'string',
      'allowNull': true,
      'columnType': 'TEXT'
    },
    email: {
      'type': 'string',
      'required': true,
      'isEmail': true,
      'unique': true,
    },
    token: {
      'type': 'string',
      'allowNull': true,
      'columnType': 'TEXT'
    },
    refreshToken: {
      'type': 'string',
      'allowNull': true,
      'columnType': 'TEXT'
    },
    avatarFd: {
      'type': 'string',
      'allowNull': true,
      'columnType': 'TEXT'
    }

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

