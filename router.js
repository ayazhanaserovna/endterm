const fs = require("fs");

function route(handle, pathname, response) {
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === "function") {
    handle[pathname](response);
  } else {
    fs.readFile("error.html", "utf-8", (err, data) => {
      if (err) {
        response.writeHead(500, {
          "Content-Type": "text/plain",
        });
        response.write(error + "\n");
        response.end();
      } else {
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {
          "Content-Type": "text/html",
        });
        response.write(data);
        response.end();
      }
    });
  }
}

exports.route = route;
