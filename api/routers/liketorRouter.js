module.exports = function(app) {
	const likesController = require('../controllers/likesController');

	app.route('/movies/:movieId/likes')
		.post(likesController.likeMovie)
		.get(likesController.getLikesFromMovie);
};
