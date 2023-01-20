import express from "express";

const App = express();

App.get("/login", (req, res) => {
  res.send("LOGIN IS COMPLETED!");
});

export default App;
