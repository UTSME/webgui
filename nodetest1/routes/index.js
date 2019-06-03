var express = require('express');
var router = express.Router();
var server = require('http').Server(express);
var io = require("socket.io")(server);

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.sendFile(__dirname + 'index');
    res.render('index.ejs');
  // var db = req.db;
  // var collection = db.get('UTSTelemetry');
  // collection.find({}).each(( {type, number}) => {
  //   console.log(type + " :: " + number);
  //       res.render('index.ejs', {
  //         speed_num: number,
  //         type: type
  //      });
  // });
});

io.on('connection', function(socket) {
  console.log("hello");
  socket.on('number', function(num) {
    console.log('number: ' + num);
  });
});

// server.listen(process.env.PORT || 3000, function() {
//   console.log('app running');
// });

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


module.exports = router;
