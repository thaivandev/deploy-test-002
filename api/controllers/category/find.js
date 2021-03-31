module.exports = {


  friendlyName: 'Find',


  description: 'Find category.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {
    console.log('this.res.query', this.req.query);
    Category.findOne(this.req.query).exec(async (err, category) => {
      if (err) {
        throw err;
      }

      return exits.success({
        data: category
      });
    });

  }


};
