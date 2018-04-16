const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
// { extended: true } : nested object를 지원한다.
// https://stackoverflow.com/questions/29960764/what-does-extended-mean-in-express-4-0
app.use(bodyParser.urlencoded({ extended: true}));

// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello world!!!!'));

app.post('/signin', (req, res) => {
  const {username, password} = req.body;
  // 클라이언트로부터 전송된 페이로드를 그대로 response
  res.send({ username, password })
})

// ----- 3.3 Route handler ::: sample code -----
const cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

const cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

const cb2 = function (req, res) {
  res.send('Hello from C!');
}

app.get('/example/c', [cb0, cb1, cb2]);

app.get('/example/d', [cb0, cb1], (req, res, next) => {
  console.log('the response will be sent by the next function ...');
  next();
}, (req, res) => res.send('Hello from D!'));

// ----- 3.3 Route handler ::: End -----

app.listen(3000, () => console.log('Example app listening on port 3000!!!'));
