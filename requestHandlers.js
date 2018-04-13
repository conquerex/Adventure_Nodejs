// requestHandlers.js

var exec = require('child_process').exec;

function start(response, postData) {
  console.log("Request handler 'start' was called.");

  var body = '<html>' +
  '  <head>' +
  '    <meta http-equiv="content-type" content="text/html; charset=UTF-8">' +
  '    <title>Sample page</title>' +
  '  </head>' +
  '  <body>' +
  '    <form action="/upload" method="post">' +
  '      <textarea name="sample_text" rows="20" cols="60"></textarea>' +
  '      <input type="submit" value="Submit text">' +
  '    </form>' +
  '  </body>' +
  '</html>';

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(body);
  response.end();
}

function upload(response, postData) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("You've sent : " + postData);
  response.end();
}

exports.start = start;
exports.upload = upload;
