var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET mechanical page. */
router.get('/mechanical', function(req, res) {
    res.render('mechanical', { title: 'Mechanical' });
});

/* GET electrical page. */
router.get('/electrical', function(req, res) {
    res.render('electrical', { title: 'Electrical' });
});

/* GET start up page. */
router.get('/start-up', function(req, res) {
    res.render('start-up', { title: 'Start Up' });
});

router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});


module.exports = router;
