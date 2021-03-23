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
  'GET /api/test': 'TestController.test',
};
