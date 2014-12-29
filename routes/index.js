
/*
 * GET home page.
 */

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/mobi');

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.update = function(req, res){
	res.json("update");
};

exports.all = function(req, res){
	res.json("all");
};