module.exports = function(app) {
	const likesController = require('../controllers/likesController');
	const moviesController = require('../controllers/moviesController');

	const convertmovieIdToInt = function (req, res, next) {
		req.params.movieId = parseInt(req.params.movieId);
		next();
	};

	app.route('/movies/:movieId(\\d+)/likes')
		.post(convertmovieIdToInt, likesController.likeMovie)
		.get(convertmovieIdToInt, likesController.getLikesFromMovie);

	app.route('/movies/nowplaying')
		.get(moviesController.getMoviesNowPlaying);
};
