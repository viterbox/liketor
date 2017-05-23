const db = require('../DBs/mongoDb');

exports.add = function(movieId, userId, like,callback) {
	const data = {
		movie_id: movieId,
		user_id: userId,
		like: like,
		date: new Date().getTime(),
	};

	const likesCollection = db.get().collection('movieLikes');
	likesCollection.insert(data,function(err, result) {
		console.log('Data Inserted');
		callback(err, result);
	});
};

exports.getAll = function(movieId, callback) {
	const likesCollection = db.get().collection('movieLikes');
	likesCollection.find({'movie_id':movieId}).toArray(function(err, docs) {
		callback(err, docs.map(function(item) {
			item.date = new Date(item.date);
			return item;
		}));
	});
};
