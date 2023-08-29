import express from "express";
import bodyParser from "body-parser";

import * as dotenv from "dotenv";

dotenv.config();

/*
  When you use module import you have to specific file name 
  at the end.
*/
import User from "./models/user.js";
import sequelize from "./models/model.js";

const app = express();

app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

// Always First Drop the table if exists and then create a new table
User.sync({ force: true });

// Create a new table once
// User.sync();

// Delete hole table
// User.drop();

// Delete all tables
// sequelize.drop();

app.listen(3000, () => {
  console.log("App will run on: http://localhost:3000");
});
