const router = require("express").Router();
const { getProducts, createProduct } = require("../Controllers/Product");

router.route("/product/:id");
router.route("/product").post(createProduct).get(getProducts);

module.exports = router;
