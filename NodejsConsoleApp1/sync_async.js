var fs = require('fs');

// Sync
console.log(1);
var data1 = fs.readFileSync('data1.txt', {encoding:'utf8'});
console.log(data1);

// Async
console.log(2);
fs.readFile('data1.txt', {encoding:'utf8'}, function(err, data){
    console.log(3);
    console.log(data1);
});
console.log(4);