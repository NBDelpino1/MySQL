// Import `orm.js` into `burger.js`
var orm = require('../config/orm.js');

// Code that will call the ORM functions using burger specific input for the ORM
var burgerAction = {
  showAll: function(cb) {
    orm.selectAll(cb);
  },	
  add: function(nameInput, cb){
    orm.insertOne("burgers", nameInput, cb);
  },
  devour: function(idInput, cb){
    orm.updateOne("burgers", inputId, cb);
  },
};

// Export
module.exports = burgerAction;