var express = require('express');
var app = express();

// 템플릿 엔진 세팅
app.set('view engine', 'pug');
app.set('views', './views');
app.locals.pretty = true;

app.use(express.static('public'));

// 템플릿 엔진에 만들어진 파일을 렌더링하는 과정
app.get('/template', function(req, res){
  res.render('temp', {time:Date(), _title:'My pug'});
});

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

