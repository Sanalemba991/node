const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Hello from the server side", app: "Natours" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
