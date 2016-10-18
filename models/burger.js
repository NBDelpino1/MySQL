// Require `orm.js` into `burger.js`
var orm = require('../config/orm.js');

//=======================================================================================================================================
//Set up commands that will be used in our controller (burgers_controller.js)
var burger = {
	all: function(cb) {
		//get all burgers in db
		orm.all('burgers', function(res){
			cb(res)
		});
	},
	create: function(name,cb) {
		console.log("2 | ***MODEL*** | burger.js file | line 14 | call CREATE function ");
		//create burger in db
		orm.create('burgers', ['burger_name', 'devoured'], [name, false], cb);
	},
	update: function(id, cb) {
		var condition = 'id=' + id;
		//update burger in db
		console.log("2 | ***MODEL*** | burger.js file | line 21 | call UPDATE function ");
		orm.update('burgers', {devoured : true}, condition, cb);
	}
};

//=======================================================================================================================================

// Export `burger` 
module.exports = burger; 

