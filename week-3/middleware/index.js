const { json } = require("body-parser");
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
/* with middleware
let numberOfRequests = 0;
function calculateRequst(req, res, next) {
  numberOfRequests++;
  console.log(numberOfRequests);
  next();
}
app.use(calculateRequst);
app.use(express.json());
app.get("/health-checkup", (req, res) => {
  res.json({
    msg: "hi there",
  });
});
app.get("/health-checkup2", (req, res) => {
  res,
    json({
      msg: "hi there",
    });
});
*/

app.use(express.json());

app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;
  res.send("you have " + kidneyLength + " kidney");
});
// global catches -- error handling
app.use((err, req, res, next) => {
  res.json({
    msg: "Sorry something is up with our server",
  });
});
app.listen(3000);
