// server.js

// Node.js에 기본내장되어 있는 http 모듈을 로드한다
var http = require("http");
var url = require('url');

function start(route, handle) {
  function onRequest(request, response) {
    var postData ="";
    var pathname = url.parse(request.url).pathname;
    console.log("Path name : "+pathname);

    request.setEncoding("utf8");
    request.addListener("data", function(postDataChunk) {
      postData += postDataChunk;
      console.log("Received POST data chunk : "+postDataChunk);
    });

    request.addListener("end", function() {
      route(handle, pathname, response, postData)
    });
  }
  // http 모듈의 createServer 메소드를 호출하여 HTTP 서버 생성
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
