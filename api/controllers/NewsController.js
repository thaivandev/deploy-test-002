/**
 * NewsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  createNews: async (req, res) => {
    const newData = req.body;
    try {
      const result = await News.create(newData).fetch();
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

  updateNews: async (req, res) => {
    const newData = req.body;
    const id = req.query;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: 'Invalid data'
      });
    }

    News.findOne(id).exec(async (err, newItem) => {
      if (err) {
        return res.serverError({
          success: false,
          message: 'Server Error' + err
        });
      }

      if (!newItem) {
        return res.status(404).json({
          success: false,
          message: 'News not found'
        });
      }

      const result = await News.updateOne(id).set(newData);

      return res.ok({
        success: true,
        data: result
      });
    });
  },

  news: async (req, res) => {
    const id = req.query;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: 'Invalid data'
      });
    }
    console.log('aaaa');
    News.findOne(id).exec(async (err, news) => {
      if (err) {
        return res.serverError({
          success: false,
          message: 'Server Error' + err
        });
      }

      if (!news) {
        console.log('notfoumnd');
        return res.status(404).json({
          success: false,
          message: 'Not Found'
        });
      }

      console.log('newItem');

      return res.ok({
        success: true,
        data: news
      });
    });
  },

  newsItems: async (req, res) => {

    NewsItem.find().exec(async (err, newsItems) => {
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

  deleteNews: async (req, res) => {
    const id = req.query;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: 'Invalid data'
      });
    }
    try {
      await News.destroyOne(id);
      return res.ok({
        success: true,
        data: true
      })
    } catch (error) {
      return res.serverError(error)
    }
  }

};

