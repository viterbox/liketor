const movieApiKey = process.env.MOVIE_DB;


exports.getMoviesNowPlaying = function(callback) {

	const mdb = require('moviedb')(movieApiKey);

	mdb.miscNowPlayingMovies({},function(err,res) {
		callback(err,res);
	});

};