const express = require("express");
const db = require("../db");
const utils = require("../utils");
const router = express.Router();

router.get("/", (request, response) => {
  console.log("category ok");
  const query = "select id, title, description from categories;";
  db.pool.execute(query, [], (error, result) => {
    response.send(utils.createResult(error, result));
  });
});

router.post("/add", (request, response) => {
  const { title, description } = request.body;
  console.log("category ok");
  const query = "insert into categories (title, description) values (?,?);";
  db.pool.execute(query, [title, description], (error, result) => {
    response.send(utils.createResult(error, result));
  });
});

module.exports = router;
