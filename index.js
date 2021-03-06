var express = require('express');
var router = express.Router();
var db=require('../database');
router.get('/', function(req, res, next) { 
res.render('index'); 
});
router.post('/create', function(req, res, next) {

  // store all the user input data
  const userDetails=req.body;

  // insert user data into users table
  var sql = 'INSERT INTO users SET ?';
  db.query(sql, userDetails,function (err, data) { 
      if (err) throw err;
         console.log("User data is inserted successfully "); 
  });
 res.redirect('/');  // redirect to index  page after inserting the data
});
module.exports = router;
