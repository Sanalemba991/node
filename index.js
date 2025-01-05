const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);

  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the overview");
  } else if (pathName === "/product") {
    res.end("This is the product");
  } else {
    res.end("Page not found");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server is running on port 3000");
});
