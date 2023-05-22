const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`<h1> Welcome to Homepage</h1>`);
  }
  if (req.url === "/register") {
    res.end(`<h3> Welcome to Registration Page</h3>`);
  }
  res.end("Error");
});

server.listen(5000);
