const http = require("http");
const url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    const pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(handle, pathname, response);
  }

  http.createServer(onRequest).listen(3000);
  console.log("Server has been started on port 3000...");
}

exports.start = start;
