/*
Here is the O.R.M. where you write functions that takes inputs and conditions and turn them into database commands like SQL.
*/
//Require `connection`
var connection = require('./connection.js');

//=======================================================================================================================================
//get input and push to an array that will then be used in the ORM when building up our MySQL queries
function printQuestionMarks(num){
  var arr = [];

  for (var i=0; i<num; i++){
    arr.push('?')
  }

  return arr.toString();
}

function objToSql(ob){
  //column1=value, column2=value2,...
  var arr = [];

  for (var key in ob) {
    arr.push(key + '=' + ob[key]);
  }

  return arr.toString();
}

//=======================================================================================================================================
//Commands that are found in our Model (burger.js) which will eventually be executed when used in our controller (burgers_controllers.js)
var orm = {
    all: function(tableInput, cb) {
        //create query that selects all the burgers in the db 
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        //run query 
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            //pass result to cb which will be used in our Model (burger.js)
            cb(result);
        });
    },
    //vals is an array of values that we want to save to cols
    //cols are the columns we want to insert the values into
    create: function(table, cols, vals, cb) {
      //create query that inserts new burger and corresponding data into the db 
      var queryString = 'INSERT INTO ' + table;
      //build up query string so it is a reconizable MySQL command, this way db responds as we want
      queryString = queryString + ' (';
      queryString = queryString + cols.toString();
      queryString = queryString + ') ';
      queryString = queryString + 'VALUES (';
      queryString = queryString + printQuestionMarks(vals.length);
      queryString = queryString + ') ';
      //test to make sure query is built up as we expected
      console.log(queryString)
      //run query
      connection.query(queryString, vals, function(err, result) {
        if (err) throw err;
        //pass result to cb which will be used in our Model (burger.js)
        cb(result);
      });
    },
    //objColVals would be the columns and values that you want to update
    //an example of objColVals would be {name: panther, sleepy: true}
    update: function(table, objColVals, condition, cb) {
      //create query that updates burger data in the db 
      var queryString = 'UPDATE ' + table;
      //build up query string so it is a reconizable MySQL command, this way db responds as we want
      queryString = queryString + ' SET ';
      queryString = queryString + objToSql(objColVals);
      queryString = queryString + ' WHERE ';
      queryString = queryString + condition;
      //test to make sure query is built up as we expected
      console.log(queryString)
      //run query
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        //pass result to cb which will be used in our Model (burger.js)
        cb(result);
      });
    }
};

//=======================================================================================================================================
// Export `orm`
module.exports = orm;
