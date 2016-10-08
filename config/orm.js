// Import (require) `connection.js` into `orm.js`
var connection = require('./connection.js');

// ORM object, will execute the necessary MySQL commands in the controllers
var orm = {
  selectAll: function(cb) {
    var command = 'SELECT * FROM burgers';
    connection.query(command, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function(tableInput, nameInput, cb) { 
    var command = "INSERT INTO " + tableInput + " (burger_name) VALUES (?)";
    connection.query(command, [nameInput], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(tableInput, idInput, cb) {
    var command = "UPDATE " + tableInput + " SET updateOne = 1  WHERE burger_name = ?";
    connection.query(command, [idInput], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

}

// Export
module.exports = orm;