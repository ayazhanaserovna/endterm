const fs = require("fs");

function start(response) {
  fs.readFile("index.html", "utf-8", (err, data) => {
    if (err) {
      response.writeHead(500, {
        "Content-Type": "text/plain",
      });
      response.write(error + "\n");
      response.end();
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data);
      response.end();
    }
  });
}

function about(response) {
  fs.readFile("about.html", "utf-8", (err, data) => {
    if (err) {
      response.writeHead(500, {
        "Content-Type": "text/plain",
      });
      response.write(error + "\n");
      response.end();
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data);
      response.end();
    }
  });
}

function graduation(response) {
  fs.readFile("./img/gallery/graduation.jpg", (err, data) => {
    if (err) {
      response.writeHead(500, {
        "Content-Type": "text/plain",
      });
      response.write(error + "\n");
      response.end();
    } else {
      response.writeHead(200, { "Content-Type": "image/jpeg" });
      response.end(data);
    }
  });
}

function study(response) {
  fs.readFile("./img/gallery/study.jpg", (err, data) => {
    if (err) {
      response.writeHead(500, {
        "Content-Type": "text/plain",
      });
      response.write(error + "\n");
      response.end();
    } else {
      response.writeHead(200, { "Content-Type": "image/jpeg" });
      response.end(data);
    }
  });
}

function memes(response) {
  fs.open("./video/students/memes.mp4", (err, data) => {
    if (err) {
      response.writeHead(500, {
        "Content-Type": "text/plain",
      });
      response.write(error + "\n");
      response.end();
    } else {
      response.writeHead(200, { "Content-Type": "video/mp4" });
      response.end();
    }
  });
}

exports.start = start;
exports.about = about;
exports.graduation = graduation;
exports.study = study;
exports.memes = memes;
