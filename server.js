var express = require('express');

var app = express();

// template engine
app.set('view engine', 'ejs');

// handle static files from this folder
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('index')
  });

app.get('/index', function(req, res){
  res.render('index')
});

// listen to port
app.listen(3000);
console.log('Server is listening 3000 port');
