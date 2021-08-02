// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// const Logger = require("./logger");
// const logger = new Logger();

// logger.on("messageLogged", (arg) => {
//   console.log("Listener called", arg);
// });

// logger.log("message");

// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("<h1 style='color:red;'>Hello World</h1>");
//     res.end();
//   }
//   if (req.url === "/api/courses") {
//     res.write(JSON.stringify([1, 2, 3]));
//     res.end();
//   }
// });

// server.listen(3000);
// console.log("Listening on port 3000..");

// const os = require("os");
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log("Total Memory:" + totalMemory / (1024 * 1024));

// console.log("Free Memory:" + freeMemory / (1024 * 1024));

const path = require("path");
var pathObj = path.parse(__filename);
console.log(pathObj);
