const express = require("express");
const router = express.Router();
const {
  getFamilia,
  createFamilia,
  getFamilias,
  updateFamilia,
} = require("../Controllers/Familia.js");

//Rutas sin parametro
router.route("/familia").get(getFamilias).post(createFamilia);

//Rutas con parametro
router.route("/familia/:id").get(getFamilia).put(updateFamilia);

module.exports = router;
