var Redis = require("ioredis")

var state = {
  db: null,
}

exports.connect = function(mode) {
  state.db = new Redis()
}

exports.get = function() {
  return state.db
}