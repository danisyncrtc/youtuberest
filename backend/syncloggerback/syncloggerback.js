'use strict';

/**
 * Server core modules
 * @module Server
 * @submodule Server.Core
**/

/**
 * Wrapper to create a single Logger use it with tracer.
 * @class syncloggerback
 * @static
 * @namespace utils
 * @namespace Core
 * @namespace Server
**/
const logger = require('tracer');

/**
 * Initialize the connection.
 * @method init
**/
logger.console({ format: '{{timestamp}} <{{title}}> <backd> {{file}}:{{line}} {{message}}' });

module.exports.connection = logger;
