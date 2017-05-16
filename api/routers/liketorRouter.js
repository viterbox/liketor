module.exports = function(app) {
	const likesController = require('../controllers/likesController');
	const moviesController = require('../controllers/moviesController');

	app.route('/movies/:movieId/likes')
		.post(likesController.likeMovie)
		.get(likesController.getLikesFromMovie);

	app.route('/movies/nowplaying')
		.get(moviesController.getMoviesNowPlaying);
};
