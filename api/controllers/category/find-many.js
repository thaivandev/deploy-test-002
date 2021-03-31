module.exports = {


  friendlyName: 'Find many',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    Category.find().exec(async (err, category) => {
      if (err) {
        throw err;
      }

      return exits.success({
        data: category
      });
    });

  }


};
