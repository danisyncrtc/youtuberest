'use strict';

const mongoose = require('mongoose');
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

const Schema = mongoose.Schema;


const videoSchema = new Schema({
  id_video: String,
  title: String,
  desc: String,
  creationTime: { type: Date, default: Date.now }
});

const videosModel = mongoose.model('videos', videoSchema);

module.exports = videosModel;
