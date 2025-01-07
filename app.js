const express = require("express");

const app = express();

// app.get("/", (req, res) => {
//   res
//     .status(200)
//     .json({ message: "Hello from the server side", app: "Natours" });
// });

// app.post("/", (req, res) => {
//   res.send("You can post to this endpoint...");
// });

app.get('/api/tours', (req, res) => {
    res.status(200).json({

        status: 'success',

    

    })
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
