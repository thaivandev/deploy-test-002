/**
 * ProductsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  createProduct: async (req, res) => {
    const productData = req.body;
    try {
      const result = await Products.create(productData).fetch();
      console.log('result 66', result);
      return res.ok({
        success: true,
        data: result
      });
    } catch (err) {
      return res.serverError({
        success: false,
        message: 'Server Error' + err
      });
    }

  },

  updateProduct: async (req, res) => {
    const productData = req.body;
    const id = req.query;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: 'Id is require'
      });
    }

    Products.findOne(id).exec(async (err, product) => {
      if (err) {
        return res.serverError({
          success: false,
          message: 'Server Error' + err
        });
      }

      if (!product) {
        return res.status(404).json({
          success: false,
          message: 'Product not found'
        });
      }

      const result = await Products.updateOne(id).set(productData);

      return res.ok({
        success: true,
        data: result
      });
    });
  },

  product: async (req, res) => {
    const id = req.query;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: 'Invalid data'
      });
    }
    console.log('aaaa');
    Products.findOne(id).exec(async (err, product) => {
      if (err) {
        return res.serverError({
          success: false,
          message: 'Server Error' + err
        });
      }

      if (!product) {
        console.log('notfoumnd');
        return res.status(404).json({
          success: false,
          message: 'Not Found'
        });
      }

      console.log('newItem');

      return res.ok({
        success: true,
        data: product
      });
    });
  },

  products: async (req, res) => {
    products.find().exec(async (err, products) => {
      if (err) {
        return res.serverError({
          success: false,
          message: 'Server Error' + err
        });
      }

      return res.ok({
        success: true,
        data: products
      });
    });
  },

  deleteProduct: async (req, res) => {
    const id = req.query;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: 'Invalid data'
      });
    }
    try {
      await Products.destroyOne(id);
      return res.ok({
        success: true,
        data: true
      });
    } catch (error) {
      return res.serverError(error)
    }
  }

};

