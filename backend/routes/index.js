var express = require('express');
var router = express.Router();

/* GET home page. */
 router.get('/', function(req, res, next) {
   //res.render('index', { title: 'Express' });
   res.sendFile("index.html", {root: '.'});
 });

 module.exports = router;

/* module.exports = {
     index: function(req, res) {
         res.render('index', { title: 'Express Todo' });
     }
 };*/
