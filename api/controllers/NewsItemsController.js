/**
 * NewsItemsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  createNewsItems: async (req, res) => {
    const newData = req.body;
    try {
      const result = await NewsItems.create(newData).fetch();
      console.log('result', result);
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

  updateNewsItems: async (req, res) => {
    const newData = req.body;
    const id = req.query;

    NewsItems.findOne(id).exec(async (err, newItem) => {
      if (err) {
        return res.serverError({
          success: false,
          message: 'Server Error' + err
        });
      }

      if (!newItem) {
        return res.status(404).json({
          success: false,
          message: 'New item not found'
        });
      }

      const result = await NewsItems.updateOne(id).set(newData);

      return res.ok({
        success: true,
        data: result
      });
    });
  },

  newsItem: async (req, res) => {
    const id = req.query;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: 'Invalid data'
      });
    }
    console.log('aaaa');
    NewsItems.findOne(id).exec(async (err, newsItems) => {
      if (err) {
        return res.serverError({
          success: false,
          message: 'Server Error' + err
        });
      }

      if (!newsItems) {
        console.log('notfoumnd');
        return res.status(404).json({
          success: false,
          message: 'Not Found'
        });
      }

      console.log('newItem');

      return res.ok({
        success: true,
        data: newsItems
      });
    });
  },

  newsItems: async (req, res) => {

    NewsItems.find().exec(async (err, newsItems) => {
      if (err) {
        return res.serverError({
          success: false,
          message: 'Server Error' + err
        });
      }

      if (!newsItems) {
        return res.status(404).json({
          success: false,
          message: 'News items not found'
        });
      }

      return res.ok({
        success: true,
        data: newsItems
      });
    });
  },

  deleteNewsItems: async (req, res) => {
    const id = req.query;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: 'Invalid data'
      });
    }
    try {
      await NewsItems.destroyOne(id);
      return res.ok({
        success: true,
        data: true
      })
    } catch (error) {
      return res.serverError(error)
    }
  }

};

