const http = require("http");
const url=require('url');

const server = http.createServer((req, res) => {
console.log(req.url);//url utpa
  res.end("Hello World");
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server is running on port 3000");
});
