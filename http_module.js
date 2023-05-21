const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "") {
    res.end("Welcome to our server");
  }
  if (req.url === "/login") {
    res.end(`<h1>Welcome to Login Api!!</h1>`);
  }
  //   if (req.url === "/register") {
  //     res.end(`<center><h1>Here is our Registration Server</h1></center>`);
  //   }
  res.end(`<h1>OOps!!</h1><h4> The page ur looking for does not exists</h4>`);
});

server.listen(5000);
