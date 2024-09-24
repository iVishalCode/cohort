const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
const jwtPassword = "123456";

const ALL_USERS = [
  {
    username: "shyam@gmail.com",
    password: "1234",
    name: "shayam",
  },
  {
    username: " vansh@gmail.com",
    password: "123223",
    name: "vansh",
  },
  {
    username: "ashish@gmail.com",
    password: "34222",
    name: "Ashish",
  },
];

function userExists(username, password) {
  let userExists = false;

  for (let i = 0; i < ALL_USERS.length; i++) {
    if (
      ALL_USERS[i].username == username &&
      ALL_USERS[i].password == password
    ) {
      userExists = true;
    }
  }
  return userExists;
}

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User does not exists in our in memory db",
    });
  }

  var token = jwt.sign(
    {
      username: username,
    },
    jwtPassword
  );
  return res.json({
    token,
  });
});

app.get("/users", (req, res) => {
  const token = req.headers.authorization;

  const decoded = jwt.verify(token, jwtPassword);
  const username = decoded.username;

  res.json({
    users: ALL_USERS,
  });
});

app.listen(3000);
