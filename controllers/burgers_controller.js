// Require `express` and `burger.js` | create `router`
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

//=======================================================================================================================================
//create routes to be used in browser
//get route -> index
router.get('/', function(req,res) {
  res.redirect('/burgers')
});

//get route burgers
router.get('/burgers', function(req,res) {
  burger.all(function(burger_data){
    //get req | use 'all' command in our model (burger.js) | return all data
    res.render('index', {burger_data});
  });
});

//post route -> back to index
router.post('/burgers/create', function(req, res) {
  //get req | use 'create' command in our model (burger.js) | return result
  burger.create(req.body.burger_name, function(result){
    res.redirect('/');
  });
});

//put route -> back to index
router.put('/burgers/update', function(req,res){
  ///get req | use 'update' command in our model (burger.js) | return result
  burger.update(req.body.burger_id, function(result){
    res.redirect('/');
  });
});

//=======================================================================================================================================
// Export `router` 
module.exports = router;

