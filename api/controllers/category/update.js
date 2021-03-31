
module.exports = {


  friendlyName: 'Update',


  description: 'Update category.',


  inputs: {
    name: {
      'type': 'string'
    }

  },


  exits: {

  },


  fn: async function (inputs, exits) {
    // console.log('this', this.req.query);
    Category.findOne(this.req.query).exec(async (err, category) => {
      if (err) {
        throw err;
      }
      if (!category) {
        return exits.success({
          message: 'Category not found'
        })
      }
      const result = await Category.updateOne(this.req.query).set(inputs);

      // All done.
      return exits.success({
        data: result
      });
    });

  }


};
