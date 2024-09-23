const express = require("express");
const app = express();
const port = 3000;
/* without middleware
app.get("/health-checkup", (req, res) => {
  const username = req.header.username;
  const password = req.header.password;
  const kidneyId = req.query.kidneyId;

  if (username != " admin " || password != "admin") {
    res.status(400).json({
      msd: "simething up with your input ",
    });
    return;
  }
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({
      msd: "simething up with your input ",
    });
    return;
  }
  res.json({
    msg: "Your kidney is fine",
  });
});
*/

app.get(
  "/health-checkup",
  (req, res, next) => {
    console.log(" hi from req1");
  },
  (req, res, next) => {
    console.log("hi from req2");
  },
  (req, res) => {
    console.log("hi from req3");
  }
);
app.listen(3000);
