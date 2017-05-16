const moviesModel = require('../models/moviesModel');

exports.getMoviesNowPlaying = function(req, res) {

	moviesModel.getMoviesNowPlaying(
		function(err, result) {
			res.json({
				result
			});
	});

};