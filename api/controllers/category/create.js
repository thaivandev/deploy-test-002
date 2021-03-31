
module.exports = {


  friendlyName: 'Create',


  description: 'Create category.',


  inputs: {
    name: {
      type: 'string',
      required: true,
      example: 'Shoe',
      description: 'The single-use Stripe Checkout token identifier representing the user\'s payment source (i.e. credit card.)',
      extendedDescription: 'Omit this (or use "") to remove this user\'s payment source.',
      whereToGet: {
        description: 'This Stripe.js token is provided to the front-end (client-side) code after completing a Stripe Checkout or Stripe Elements flow.'
      }
    },

    slug: {
      type: 'string',
      example: '4242',
      description: 'Omit if removing card info.',
      whereToGet: { description: 'Credit card info is provided by Stripe after completing the checkout flow.' }
    },

    description: {
      type: 'string',
      example: 'visa',
      description: 'Omit if removing card info.',
      whereToGet: { description: 'Credit card info is provided by Stripe after completing the checkout flow.' }
    },

  },


  exits: {
    nameNotEmpty: {
      statusCode: 400,
      description: 'The name not empty.',
    },
  },


  fn: async function (inputs, exits) {
    // if (!inputs.name) {
    //   throw 'nameNotEmpty';
    // }
    try {
      const result = await Category.create(inputs).fetch();

      // All done.
      return exits.success({
        data: result
      });

    } catch (error) {
      throw error;
    }

  }


};
