// var express = require('express');
// var router = express.Router();

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
// var http = require('http');
// var url = require('url');
// var fs = require('fs');
server.listen(80);



// http.createServer(function(req, res) {
//     res.writeHead(200, {"Content-Type": "text/html"});
//     var db = req.db;
//     var collection = db.get('UTSTelemetry');
//     collection.find({}).each(( {type, number}) => {
//             res.write(number);
//         });
//         res.end();
//     });
    // var path = require('path');

    /* GET home page. */
app.get('/', function(req, res, next) {
    res.sendFile( __dirname + '/index.html');
});

io.on('connection', function (socket) {
    console.log("Connected " + socket);
});

var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/telemetry", function (err, db) {
  if(err) {
    throw err;
  } else {
    var db = db.db('telemetry');
    db.collection("UTSTelemetry").find().toArray(function(err, items) {
      if(err) throw err;
      console.log(items);
      io.emit('data', items);
  });
}
});


                    //
                    // /* GET mechanical page. */
                    // router.get('/mechanical', function(req, res) {
                    //       res.render('mechanical', { title: 'Mechanical' });
                    //   });
                    //
                    //   /* GET electrical page. */
                    //   router.get('/electrical', function(req, res) {
                    //         res.render('electrical', { title: 'Electrical' });
                    //     });
                    //
                    //
                    //     /* GET start up page. */
                    //     router.get('/start-up', function(req, res) {
                    //           res.render('start-up', { title: 'Start Up' });
                    //       });


module.exports = app;
