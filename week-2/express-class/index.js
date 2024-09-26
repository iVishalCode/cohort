const express = require("express");
const app = express();
app.use(express.json());
var users = [
  {
    name: "shyam",
    kidney: [
      { healthy: true }, // Kidney 2
    ],
  },
];

app.get("/", (req, res) => {
  const shyamKidney = users[0].kidney;
  const numberOfKidneys = shyamKidney.length;

  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < shyamKidney.length; i++) {
    if (shyamKidney[i].healthy) {
      numberOfHealthyKidneys++;
    }
  }

  const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

  res.json({
    shyamKidney,
    numberOfHealthyKidneys,
    numberOfUnHealthyKidneys,
  });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidney.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "done",
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
