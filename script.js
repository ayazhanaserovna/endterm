const app = require("./app");
const router = require("./router");
const requestHandlers = require("./requestHandlers");

const handle = {};
handle["/"] = requestHandlers.start;
handle["/about"] = requestHandlers.about;
handle["/img/gallery/graduation"] = requestHandlers.graduation;
handle["/img/gallery/study"] = requestHandlers.study;
handle["/video/memes"] = requestHandlers.memes;

app.start(router.route, handle);

console.log("Its working");
