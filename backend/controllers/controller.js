var express = require('express');
const Videos = require('../models/videos');

exports.addVideos = function(req, res){
  //console.log('Todo d'+ req.body.id_video);
  Videos.findOne({ id_video: req.body.id_video }, function(err, video){
			if(err || video) {
        console.log(err);
        res.json({ status: false, errorMessage: "Video existe bien" });
			} else {
        var newvideo = new Videos({ id_video: req.body.id_video, title: req.body.title, desc: req.body.desc });
        newvideo.save(function (err, video) {
          if (err) {
            console.log("video error");
            res.json({ status: false, errorMessage: err });
          } else {
            console.log("video creado");
            res.json({ status: true, errorMessage: "" });
          }
        });
			}
		});

}

exports.delvideos = function(req, res){
  var id = req.params.id;
  Videos.findByIdAndRemove(id, function(err, videos){
      if(err){
        console.log("Del error");
        res.json({ status: false, errorMessage: err });
      }else {
        console.log("Del creado");
        res.json({ status: true, errorMessage: "" });
      }
  });
}

exports.listVideos = function(req, res){
  Videos.find({}, function(err, videos){
    if(err) res.send(err);
    res.json(videos);
  })


}
