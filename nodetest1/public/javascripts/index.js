var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.get('/', function(req, res) {
    res.sendFile( __dirname + '/index.html');
});

io.on('connection', function(socket) {
  console.log('a user is connected');
  socket.emit('hello', 'can yu hear me?');
  socket.on('my other event', function(data) {
    console.log(data);
  });
});

// http.createServer(function(req, res) {
//     res.writeHead(200, {"Content-Type": "text/html"});
//     var db = req.db;
//     var collection = db.get('UTSTelemetry');
//     collection.find({}).each(( {type, number}) => {
//             res.write(number);
//         });
//         res.end();
//     });

    /* GET home page. */



// var MongoClient = require('mongodb').MongoClient;
//
// // Connect to the db
// MongoClient.connect("mongodb://localhost:27017/telemetry", function (err, db) {
//   if(err) {
//     throw err;
//   } else {
//     var db = db.db('telemetry');
//     db.collection("UTSTelemetry").find().toArray(function(err, items) {
//       if(err) throw err;
//       console.log(items);
//       io.on('hello', function(data) {
//         io.emit('data', items);
//       });
//
//
//   });
// }
// });

// var db = req.db;
// var collection = db.get('UTSTelemetry');
// collection.find({}).each(( {type, number}) => {
//     console.log(number);
//     io.emit('get', number);
// });

/* GET mechanical page. */
app.get('/mechanical', function(req, res) {
  res.render('mechanical', { title: 'Mechanical' });
});

/* GET electrical page. */
app.get('/electrical', function(req, res) {
  res.render('electrical', { title: 'Electrical' });
});

/* GET start up page. */
app.get('/start-up', function(req, res) {
  res.render('start-up', { title: 'Start Up' });
});

// server.listen(app.get('port'), function() {
//   console.log("listening on port 3000");
// });

module.exports = app;
