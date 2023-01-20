const express = require("express");

const App = express();

App.get("/login", (req, res) => {
  res.send("LOGIN IS COMPLETED!");
});

module.exports = App;
