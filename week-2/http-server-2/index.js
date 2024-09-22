const express = require("express");

const app = express();

const port = 3000;

app.post("/route-handle", (req, res) => {
  res.json({
    name: "Raju",
    age: 34,
  });
});
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Your app run on the port ${port}`);
});
