var db = require('../db');

// db.dosomething
module.exports = {
  getAll: function (callback) {
    db.connect((err) => {
      if (err) {
        console.log('error establishing connection');

      } else {

        var queryString = 'SELECT * FROM messages;';
        var query = db.query(queryString, [], (err, data) => {
          if (err) {
            throw err;
          } else {
            console.log('Success retrieving all!')
            // return data somehow
            console.log('data: ', data);
            callback(data);
          }
        });
      }
    });

    db.end();


  }, // a function which produces all the messages
  create: function (message) {
    // var sql = `INSERT INTO messages VALUES (${message})`

    db.connect((err) => {
      if (err) {
        console.log('error establishing connection');

      } else {
        console.log('connection established successfully');

        var queryString = `INSERT INTO messages (text) VALUES ('${message}');`;

        // use imported query function (do we need to bind the function before using??)
        db.query(queryString, [], (err) => {
          if (err) {
            throw err;
          } else {
            console.log('Success inserting!');
          }
        });
      }
    });
    db.end();
  } // a function which can be used to insert a message into the database
};
