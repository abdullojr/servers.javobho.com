const express = require("express");

const app = express();

app.get("/posts", (req, res) => {
  res.send("FORMATION");
});

app.listen(3000, () => {
  console.log("SERVER IS OPEN");
});
