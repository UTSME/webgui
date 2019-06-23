var app = require('express')();
-
/*Get HOME page*/
app.get('/', function(req, res) {
    res.sendFile( __dirname + '/index.html');
});

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

module.exports = app;
