const express = require("express");

const router = express.Router();

const {
  getLists,
  getList,
  updateList,
  deleteList,
  createList,
} = require("../Controllers/Prices");

router.route("/list").get(getLists).post(createList);

router.route("/list/:id").get(getList).put(updateList).delete(deleteList);

module.exports = router;
