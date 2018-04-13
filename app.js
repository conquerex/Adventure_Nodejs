//app.js
const http = require('http'); //1

http.createServer((request, response) => { //2
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hellllo World')
}).listen(3000); //3

console.log('Server running at http://127.0.0.1:3000/');

// exports

const circle = require('./circle.js');

// console.log(`지름이 4인 원의 면적 : ${circle.area(4)}`)
// console.log(`지름이 4인 원의 둘레 : ${circle.circumference(4)}`)


// module.exports

const myCircle = circle(4);
console.log(`지름이 4인 원의 면적 : ${myCircle.area(4)}`);
console.log(`지름이 4인 원의 면적 : ${myCircle.circumference(4)}`);

const value = require('./primitive');
console.log(value);


// module.exports에 함수를 할당하는 방식

// const add = require('./foo');
// const result = add(1, 2);
// console.log(result);

// exports에 객체를 할당하는 방식

const calc = require('./foo');
const result1 = calc.sum(1,2);
console.log(result1);

const result2 =calc.minus(1,2);
console.log(result2);
