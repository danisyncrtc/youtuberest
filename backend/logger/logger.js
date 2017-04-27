'use strict';

const bunyan = require('bunyan');
const uuidV4 = require('uuid/v4');
const loggerServ = (process.env.LOGGER_SERV || 'backnd');

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

const logger = bunyan.createLogger({ name: loggerServ, serializers: { request: idSerializer, err: bunyan.stdSerializers.err }, src: true });

module.exports = logger;
