// requestHandlers.js

var exec = require('child_process').exec;

function start(response) {
  console.log("Request handler 'start' was called.");
  var content = "empty";

  exec("ls -lah", function(error, stdout, stderr) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(
      "<h1>" + stdout  + "</h1>"
    );
    response.end();
  });

  return content;
}

function upload(response) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(
    "<h1>" + "Upload!!!!"  + "</h1>"
  );
  response.end();
}

exports.start = start;
exports.upload = upload;
