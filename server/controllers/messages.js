var models = require('../models');
const fs = require('fs');

var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept, authorization',
  'access-control-max-age': 10 // Seconds.
};

module.exports = {
  get: function (req, res) {
    console.log('req.method: ', req.method);
    res.writeHead(200, {'Content-Type': 'application/json'});
    const data = models.messages.getAll((messages) => {
      res.end(JSON.stringify(messages));
    });

  }, // a function which handles a get request for all messages
  post: function (req, res) {
    models.messages.create(req.body.text);
    res.writeHead(201, {'Content-Type': 'application/json'});
    res.end();
  } // a function which handles posting a message to the database

}
