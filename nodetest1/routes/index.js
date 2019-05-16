var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
  var db = req.db;
  var collection = db.get('UTSTelemetry');
  collection.find({}).each(( {type, number}) => {
    console.log(type + " :: " + number);
    switch(type) {
      case "speed" : update('sc-value', number);
                     break;
      case "steer" : update('steer-num', number);
                     break;
      case "brake" : update('brake-number', number);
                     break;
      default:       break;
    }
  });
});

function update(id, number) {
  //document.getElementsByClassName(id).innerHTML = "3";
}
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


// console.log("Hellooo");
// router.get('views/index', function(req, res) {
//     var db = req.db;
//     console.log("Helloo");
//     var collection = db.get('UTSTelemetry');
//     console.log("Hello");
//     collection.find({},{},function(e,docs){
//         res.render('index', {
//             "steer-label" : docs
//         });
//         console.log("docs");
//     });
// });
// console.log("For real but im not a hipster");


module.exports = router;
