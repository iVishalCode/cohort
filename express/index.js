const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "12345678s";

const app = express();
const ALL_USERS = [
  {
    email: "raju12@gmail.com",
    password: "1233",
    name: "Raju Singh",
  },
  {
    email: "satendra12@gmail.com",
    password: "12331",
    name: "Satendra Singh",
  },
  {
    email: "toni12@gmail.com",
    password: "12345",
    name: "Toni Singh",
  },
  {
    email: "shanu12@gmail.com",
    password: "12315",
    name: "Shanu Singh",
  },
];
