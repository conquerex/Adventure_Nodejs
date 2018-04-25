var express = require('express');
var app = express();
app.get('/', function(req, res) { // router
  res.send('<h1>This is Home page.</h1>'); // controller
});
app.get('/login', function(req, res) {
  res.send('Login please');
});
app.listen(3000, function() {
  console.log('Connected 3000 port!!!!');
});

