const http = require("http");

const server = http.createServer();

// Using EventEmitter API to listen and subsribe to a particular port
// rather than the previous method used in the http_module
server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(5000);
