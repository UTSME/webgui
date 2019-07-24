var createError = require('http-errors');
var express = require('express');
var path = require('path');

var cookieParser = require('cookie-parser');
// var logger = require('morgan');
const app = express();

const PORT = process.env.PORT || 3000; //The port the server is listening to, this should stay the same
const server = app.listen(PORT);
var io = require('socket.io')(server);
var indexRouter = require('./public/javascripts/index.js');
app.use(express.static(__dirname + '/public'));

app.use('/', indexRouter);
app.io = io;
/***********************************DONT CHANGE ANYTHING ABOVE THIS LINE **********************************************************/

var db = 'mongodb://localhost:27017/telemetry'; //The database, change this to the pi's database
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
  MongoClient.connect(db, function (err, db) {
    if(err) {
      throw err;
    } else {
      var db = db.db('telemetry'); //The database in mongodb
      var collection = db.collection("UTSTelemetry"); //The collection in mongodb
      function database() {
        collection.find({}).each(function(err, items) {
          if(err) throw err;
          console.log( items);

          io.on('connection', function(socket) {
            // console.log('a user is connected ' + socket.id );
            if(items != null)  {
              io.emit('data', items);
              setInterval(function() {
              socket.emit('hello', items.type, items.number); //type and number are the columns. You can change this to suit the database.
              // db.collection("UTSTelemetry").deleteOne(items);
            }, 2500);
            }
          });
        });
    }
    setInterval(database, 5000);
    }
  });

/***********************************DONT CHANGE ANYTHING BELOW THIS LINE **********************************************************/

// view engine setup
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'ejs');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Make our db accessible to our router
app.use(function(req,res,next){
  req.db = db;
  next();
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
// set locals, only providing error in development
res.locals.message = err.message;
res.locals.error = req.app.get('env') === 'development' ? err : {};

// render the error page
res.status(err.status || 500);
res.render('error.ejs');
});

module.exports = app;
// module.exports.io = io;
