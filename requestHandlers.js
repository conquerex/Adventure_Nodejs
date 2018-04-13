// requestHandlers.js

function start() {
  console.log("Request handler 'start' was called.");
  return "Start!!!!";
}

function upload() {
  console.log("Request handler 'upload' was called.");
  return "Upload!!!!";
}

exports.start = start;
exports.upload = upload;
