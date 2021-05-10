const path = require("path");

const express = require("express");
const routes = require("./routes");

const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 3000;

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use(routes);