const Redis = require('ioredis');

const state = {
	db: null,
};

exports.connect = function() {
	state.db = new Redis();
};

exports.get = function() {
	return state.db;
};
