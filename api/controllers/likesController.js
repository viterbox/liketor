'use strict';

var likesModel = require('../models/likesModel');



exports.likeMovie = function(req, res) {

  console.log(req.body);

  likesModel.add(req.params.movieId, req.body.user_id, req.body.like,
  	 function(err, result) {
		console.log('console02: '+result);
		res.json({likes: result})
   	});


};

exports.getLikesFromMovie = function(req, res) {

  console.log(req.body);

   likesModel.getAll(req.params.movieId,
   function(err, result) {
		console.log('console02: '+result);
		res.json({likes: result})
   	});

};


