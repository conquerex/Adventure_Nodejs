// server.js

// Node.js에 기본내장되어 있는 http 모듈을 로드한다
var http = require("http");
var url = require('url');

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Path name : "+pathname);
    // var query = url.parse(request.url, true).query;

    // handle은 pathname와 request handler의 관계를 담고 있는 객체
    // var content = route(handle, pathname);
    route(handle, pathname, response);

    // console.log("Request received.");
    // response.writeHead(200, {"Content-Type": "text/html"});
    // response.write(
    //   "<h1>" + content  + "</h1>"
      // "<h1>Req parameter : " + JSON.stringify(query) + "</h1>"
    // );
    // response.end();
  }
  // http 모듈의 createServer 메소드를 호출하여 HTTP 서버 생성
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
