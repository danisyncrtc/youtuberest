var express = require('express');
var router = express.Router();
var videoController = require('../controllers/controller');

/* VIDEOS */

/**
 * Regular REST VIDEOS. Submit parameters in HTTP request
 * @method GET /
 * @param {String} search -
 * @return Redirect to /
**/
router.get('/', videoController.listVideos);

router.get('/delete/:id', videoController.delvideos);

router.post('/add', videoController.addVideos);

/*router.get('/', function(req, res){
    res.send('All list')
});*/

/*router.post('/add', function(req, res){
    console.log('Todo '+ req.body.id_video)
});*/

module.exports = router;
