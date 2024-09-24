const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

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
    username: "ashish@gamil.com",
    password: "34222",
    name: "Ashish",
  },
];

function useerExists(username, password) {}
