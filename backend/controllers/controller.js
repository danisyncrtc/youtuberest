'use strict';

const express = require('express');
const Videos = require('../models/videos');
// const bunyan = require('bunyan');
const logger = require('../logger/logger');
// const logger = bunyan.createLogger({ name: 'myapp', serializers: { req: bunyan.stdSerializers.req } });

exports.addVideos = function(req, res) {
  // console.log('Todo d'+ req.body.id_video);
  Videos.findOne({ id_video: req.body.id_video }, function(err, video) {
    if(err) {
      logger.error({ err: err, request: [req, res] }, 'Error al guardar video: %s', req.body.id_video);
    } else if(video) {
      logger.warn({ request: [req, res] }, 'Video ya existe en la base de datos: %s', req.body.id_video);
      //res.json({ status: false, errorMessage: 'Video existe' });
    } else {
      const newvideo = new Videos({ id_video: req.body.id_video, title: req.body.title, desc: req.body.desc });
      newvideo.save(function (errSave, videoSave) {
        if(err) {
          logger.error('Error al guardar video: %s', req.body.id_video, { err: errSave });
        } else {
          logger.info({ request: [req, res] }, 'Video guardado: %s', req.body.id_video);
          res.json({ status: true, errorMessage: '' });
        }
      });
    }
    logger.info({ request: [req, res] }, 'Video guardado: %s', req.body.id_video);
    res.json({ status: false, errorMessage: '' });
  });
};

exports.delvideos = function(req, res) {
  const id = req.params.id;
  Videos.findByIdAndRemove(id, function(err, video) {
    if(err) {
      logger.error('Error al eliminar video: %s', req.body.id_video, { err: err });
    } else {
      logger.info('Video eliminado: %s', req.body.id_video, { video: video });
      res.json({ status: true, errorMessage: '' });
    }
  });
};

exports.listVideos = function(req, res) {
  Videos.find({}, function(err, videos) {
    if(err) {
      logger.error('Error al listar videos', { err: err });
    }
    logger.info({ request: [req, res] }, 'Video listados: ');
    res.json(videos);
  });
};
