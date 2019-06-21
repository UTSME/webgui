var app = require('express')();
-
/*Get HOME page*/
app.get('/', function(req, res) {
    res.sendFile( __dirname + '/index.html');
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
