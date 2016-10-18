// Require `express` and `burger.js` | create `router`
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

//=======================================================================================================================================
//create routes to be used in browser
//get route -> index
router.get('/', function(req,res) {
  // console.log('4 | ***CONTROLLER*** | burgers_controller.js file | line 10 | redirect')
  res.redirect('/burgers')
});

//get route burgers
router.get('/burgers', function(req,res) {
  burger.all(function(burger_data){
    console.log("4 | ***CONTROLLER*** | burgers_controller.js | line 18 | display result");
    console.log("===========================================================")
    //get req | use 'all' command in our model (burger.js) | return all data
    res.render('index', {burger_data});
  });
});

//post route -> back to index
router.post('/burgers/create', function(req, res) {
  console.log("1 | ***CONTROLLER*** | burgers_controller.js | line 25 | POST command given (add a burger)");
  //get req | use 'create' command in our model (burger.js) | return result
  burger.create(req.body.burger_name, function(result){
    res.redirect('/');
  });
});

//put route -> back to index
router.put('/burgers/update', function(req,res){
  ///get req | use 'update' command in our model (burger.js) | return result
  console.log("1 | ***CONTROLLER*** | burgers_controllers file | line 36 | PUT command given (devour a burger)");
  burger.update(req.body.burger_id, function(result){
    res.redirect('/');
  });
});

//=======================================================================================================================================
// Export `router` 
module.exports = router;

