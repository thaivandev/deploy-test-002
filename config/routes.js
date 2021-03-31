/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  'GET /api/user': 'UsersController.getUsers',
  'POST /api/user': 'UsersController.createUser',
  'POST /api/login': 'UsersController.login',
  'GET /api/users': 'UsersController.users',


  'POST /api/newsItems': 'NewsItemsController.createNewsItems',
  'PUT /api/newsItems': 'NewsItemsController.updateNewsItems',
  'GET /api/newsItem': 'NewsItemsController.newsItem',
  'GET /api/newsItems': 'NewsItemsController.newsItems',
  'DELETE /api/newsItems': 'NewsItemsController.deleteNewsItems',

  'POST /api/news': 'NewsController.createNews',
  'PUT /api/news': 'NewsController.updateNews',
  'GET /api/news': 'NewsController.news',
  'GET /api/newsMany': 'NewsController.newsItems',
  'DELETE /api/news': 'NewsController.deleteNews',

  'POST /api/products': 'ProductsController.createProduct',
  'PUT /api/products': 'ProductsController.updateProduct',
  'GET /api/product': 'ProductsController.product',
  'GET /api/products': 'ProductsController.products',
  'DELETE /api/products': 'ProductsController.deleteProduct',


  'GET /api/test': 'TestController.test',
  'POST /api/upload': 'TestController.upload',
  'GET /api/avatar': 'TestController.avatar',

  'POST /api/send-sms': { action: 'send-sms' },

  'POST  /api/category': { action: 'category/create' },
  'PUT  /api/category': { action: 'category/update' },
  'GET  /api/categories': { action: 'category/find-many' },
  'GET  /api/category':  { action: 'category/find' },
};
