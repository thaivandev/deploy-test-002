/**
 * Products.js
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
    category: {
      model: 'Category'
    },
    productItemId: {
      'type': 'number',
    },
    productCatId: {
      'type': 'number',
    },
    price: {
      'type': 'number',
      'columnType': 'float'
    },
    promotionPrice: {
      'type': 'number',
      'columnType': 'float'
    },
    display: {
      'type': 'boolean',
      'defaultsTo': true,
    },
    hotSale: {
      'type': 'boolean'
    },
    highlights: {
      'type': 'boolean',
      'defaultsTo': true,
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

