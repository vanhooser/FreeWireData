
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
	var updates = db.get('updates');
	var entry = {
		time : req.body.time,
		packCurrent : req.body.packCurrent,
		packOpenVoltage : req.body,packOpenVoltage,
		packSummedVoltage : req.body.packSummedVoltage,
		packSOC : req.body.packSOC,
		packHealth : req.body.packHealth,
		highCellVoltage : req.body.highCellVoltage,
		lowCellVoltage : req.body.lowCellVoltage,
		avgCellVoltage : req.body.avgCellVoltage,
		highTemperature : req.body.highTemperature,
		lowTemperature : req.body.lowTemperature,
		maxPackDCL : req.body.maxPackDCL,
		maxPackCCL : req.body.maxPackCCL
	};
	updates.update({_id:req.body.id}, entry, function(err, records){
		if(err){
			res.json("ERROR");
		} else {
			res.json("Success");
		}
	});
};

exports.all = function(req, res){
	var updates = db.get('updates');
	updates.find({},{}, function(e, docs){
                res.json(docs);
        });
};