var express = require('express');
var router = express.Router();
var server = require('http').Server(express);
var io = require('socket.io')(server);
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.sendFile(__dirname, '../views/index.ejs');
 res.render('index.ejs');
  // var db = req.db;
  // var collection = db.get('UTSTelemetry');
  // collection.find({}).each(( {type, number}) => {
  //   console.log(type + " :: " + number);
       //  res.render('index.ejs', {
       //    speed_num: number,
       //    type: type
       // });

  // });
});

server.listen(80, function(){
  console.log('listening on *:80');
});



  /*
    our message we want to send to the client: in this case it's just a random
    number that we generate on the server
  */
  io.on('connection', function(socket) {
    setInterval( function() {
      socket.on('data', function(data) {
        var data = Math.random();
        io.emit('data', data);
    });
    }, 1000);
  });

  //console.log (data);



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
