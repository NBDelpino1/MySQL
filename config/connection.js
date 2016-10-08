// Dependency
var mysql = require('mysql');
// Set up db
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : 8889,
  user     : 'root',
  password : 'root',
  database : 'burgers_db'
});
// Connect to db 
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as id# ' + connection.threadId);
});

// connection.end()

// Export
module.exports = connection;