var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/', function(req, res) { // router
  res.send('<h1>This is Home page.</h1>'); // controller
});
app.get('/route', function(req, res) {
  res.send('Hello Router <br><img src="/nodejs-dark.jpg">');
});
app.get('/dynamic', function(req, res) {
  var lis = '';
  var time = Date();
  for (let i = 0; i < 5; i++) {
    lis = lis + '<li>Coding</li>';
  }
  var output = `<!DOCTYPE html>
  <html>
  <head>
      <meta charset="utf-8" />
      <title>Page Title</title>
  </head>
  <body>
      <h2>Hello Dynamic!!!!</h2>    
      <ul>${lis}</ul>
      ${time}
  </body>
  </html>`;
  res.send(output);
});
app.get('/login', function(req, res) {
  res.send('Login please');
});
app.listen(3000, function() {
  console.log('Connected 3000 port!!!!');
});

