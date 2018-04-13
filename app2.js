// app2.js

const myModule = require('./module');

// require
// module/calc
const result = myModule.calc.sum(1,4);
console.log(result);

// module/print
myModule.print.sayHello();
