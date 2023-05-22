const http = require("http");

const sever = http.createServer((req, res) => {
  console.log("testing");
  res.end(`<h1> Hello World</h1>`);
});

sever.listen(5000, () => {
  console.log("Server Listening on port ; 5000.....!!");
});
