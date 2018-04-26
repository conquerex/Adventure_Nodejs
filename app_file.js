var express = require('express');
var app = express();
app.set('views', './views_file');
app.set('view engine', 'pug');
app.locals.pretty = true;

app.get('/topic/new', function(req, res){
    res.send('Hello file~!!!!');
});
app.listen(3000, function(){
    console.log('Connected, 3000 port!!!');
});