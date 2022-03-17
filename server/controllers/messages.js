var models = require('../models');

module.exports = {
  get: function (req, res) {
    if (req.method === 'GET') {
      res.writeHead(200, {'Content-Type': 'application/json'});
      const data = models.getAll();
      res.end(JSON.stringify(data));
    }
  }, // a function which handles a get request for all messages
  post: function (req, res) {

    if (req.method === 'POST') {


      headers['Content-Type'] = 'application/json';
      var body = '';
      request.on ('data', (chunk) => {
        body += chunk;
        if (!Array.isArray(JSON.parse(body))) {
          _storage.push(JSON.parse(body));
        } else {
          statusCode = 400;
          res.writeHead(statusCode, headers);
          res.end();
        }
      });
      res.writeHead(201, headers);
      res.end();


  } // a function which handles posting a message to the database
};
