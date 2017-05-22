const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/liketor';

const state = {
	db: null,
};

exports.connect = function() {
	MongoClient.connect(url, function(err, db) {
		console.log('Connected correctly to server');
		state.db = db;
	});
};

exports.get = function() {
	return state.db;
};