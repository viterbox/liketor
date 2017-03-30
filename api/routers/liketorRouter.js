'use strict';
module.exports = function(app) {
  var likesController = require('../controllers/likesController');


  app.route('/movies/:movieId/likes')
    .post(likesController.likeMovie)
    .get(likesController.getLikesFromMovie);
};