/**
 * Videos model
 * @class videos
 * @constructor
 * @namespace models
 * @namespace Core
 * @namespace Server
 * @param {String} id - Video id
 * @param {Date} creationTime - Creation time and date
**/
var mongoose = require('mongoose');
Schema = mongoose.Schema;


var videoSchema = new Schema({
    id_video: String,
    title: String,
    desc: String,
    creationTime: { type: Date, default: Date.now }
});

var videosModel = mongoose.model('videos', videoSchema);

module.exports = videosModel
