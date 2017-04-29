'use strict';

const bunyan = require('bunyan');
const BunyanStackDriver = require('bunyan-stackdriver')
const uuidV4 = require('uuid/v4');
const loggerServ = (process.env.LOGGER_SERV || 'backnd');


const stackDriver = new BunyanStackDriver({
  // The path to your key file:
  keyFilename: '../prueba-33960b2c3da9.json',
  // Or the contents of the key file:
  credentials: require('../prueba-33960b2c3da9.json'),
  logName: 'logname',
  projectId: 'prueba-164211',
  writeInterval: 500, // ms
}, function errorCallback(err) { console.log(err); });


function idSerializer(request) {
  const req = request[0];
  var res = request[1];

  const headerName = 'X-Request-Id';
  const attributeName = 'id';
  if(!req || !req.connection) {
    return req;
  }

  req[attributeName] = req[attributeName] || uuidV4();
  res.setHeader(headerName, req[attributeName]);
  return {
    id: req[attributeName],
    method: req.method,
    url: req.url,
    headers: req.headers,
    remoteAddress: req.connection.remoteAddress,
    remotePort: req.connection.remotePort
  };
}

const logger = bunyan.createLogger({
  name: loggerServ,
  serializers: { request: idSerializer, err: bunyan.stdSerializers.err },
  src: true,
  streams: [{
    type: 'raw', // faster; makes Bunyan send objects instead of stringifying messages
    stream: stackDriver
  }]
});

module.exports = logger;
