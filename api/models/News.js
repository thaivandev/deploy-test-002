/**
 * News.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    name: {
      'type': 'string',
      'required': true
    },
    newsItem: {
      model: 'NewsItems'
    },
    type: {
      'type': 'string',
    },
    photo: {
      'type': 'string',
    },
    view: {
      'type': 'number',
    },
    display: {
      'type': 'boolean',
      'defaultsTo': true,
    },
    highlights: {
      'type': 'boolean',
      'defaultsTo': true,
    },
    content: {
      'type': 'text',
      'columnType': 'TEXT'
    },
    keywords: {
      'type': 'text',
      'columnType': 'TEXT'
    },
    description: {
      'type': 'text',
      'columnType': 'TEXT'
    },
    title: {
      'type': 'string',
    }

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

