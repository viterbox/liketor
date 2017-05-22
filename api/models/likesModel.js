const db = require('../DBs/redisDb');

exports.add = function(movieId, userId, like,callback) {
	const data = {
		movie: movieId,
		user: userId,
		like: like,
		date: new Date().getTime(),
	};

	db.get().rpush(`likes_movie_${movieId}`, JSON.stringify(data),
		function(err, result) {
			console.log(`console00: ${result}`);
			callback(err, result);
		});
};

exports.getAll = function(movieId, callback) {
	db.get().lrange(`likes_movie_${movieId}`, 0, -1,
		function (err, result) {
			console.log('console01: '+ result);
			callback(err, result.map(function(item) {
				const data = JSON.parse(item);
				data.date = new Date(data.date);
				return data;
			}));
		});
};
