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

// symentic url
app.get('/topic/:id', function(req, res) { // router
  var topics = [
    'Red', 'Blue', 'Green'
  ];

  // non-symentic link and symentic url
  var output = `
    <a href="/topic?id=0">First color</a><br>
    <a href="/topic?id=1">Second color</a><br>
    <a href="/topic?id=2">Third color</a><br>
    <h1>${topics[req.params.id]}</h1>
  `;
  res.send(output);

  // non-symentic url, Query String
  // res.send(`<h1>${topics[req.query.id]}</h1>`); // controller
});

// symentic url
app.get('/topic/:id/:mode', function(req, res){
  res.send(req.params.id +' , '+ req.params.mode);
});

app.get('/form', function(req, res){
  res.render('form');
})

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

