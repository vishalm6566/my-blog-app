const express = require("express");
const db = require("../db");
const utils = require("../utils");
const router = express.Router();

router.get("/", (request, response) => {
  console.log("blog ok");
  const query = "select id, title, contents, user_id, category_id from blogs;";
  db.pool.execute(query, [], (error, result) => {
    response.send(utils.createResult(error, result));
  });
});

router.get("/myblog", (request, response) => {
  console.log("blog ok");
  const query =
    "select id, title, contents, user_id, category_id from blogs where user_id = ?;";
  db.pool.execute(query, [request.userId], (error, result) => {
    response.send(utils.createResult(error, result));
  });
});

router.post("/findblog", (request, response) => {
  const { searchText } = request.body;
  console.log("blog ok");
  const query = `SELECT * FROM blogs WHERE title LIKE ? OR contents LIKE ?;`;
  db.pool.execute(
    query,
    [`%${searchText}%`, `%${searchText}%`],
    (error, result) => {
      response.send(utils.createResult(error, result));
    }
  );
});

router.put("/editblog", (request, response) => {
  const { id, title, contents } = request.body;
  console.log(request.body);
  console.log("edit blog ok");
  const query = "update blogs set title = ?, contents = ? where id = ?;";
  db.pool.execute(query, [title, contents, id], (error, result) => {
    response.send(utils.createResult(error, result));
  });
});

router.post("/addblog", (request, response) => {
  const { title, contents } = request.body;
  console.log(request.body);
  console.log("edit blog ok");
  const query = "insert into blogs (title, contents) values (?,?); ";
  db.pool.execute(query, [title, contents], (error, result) => {
    response.send(utils.createResult(error, result));
  });
});

module.exports = router;
