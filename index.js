import express from "express";
import bodyParser from "body-parser";

import "./models/model.js";

const app = express();

app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("App will run on: http://localhost:3000");
});
