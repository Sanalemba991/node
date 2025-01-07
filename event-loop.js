// const EventEmitter = require("events");

// const myEmitter = new EventEmitter();

// myEmitter.on("newSale", () => {
//   console.log("There was a new sale!");
// });

// myEmitter.on("newSale", () => {
//   console.log("Customer name: Jonas");
// });

// myEmitter.on("newSale", stock => {
//   console.log(`There are now ${stock} items left in stock.`);
// });

// myEmitter.emit("newSale",9);

// const http = require("http");
// const server = http.createServer();

// server.on("request", (req, res) => {
//   console.log("Request received!");
//   console.log(req.url);
//   res.end("Request received");
// });

// server.on("close", () => {
//   console.log("Server Close");
// });

// server.listen(3000, "127.0.0.1", () => {
//   console.log("Waiting for requests...");
// });
//  const getDogpic=async()=>{

//   const data=await fetch('https://dog.ceo/api/breeds/image/random');
//   console.log(`breed: ${data.message}`);

//  };
