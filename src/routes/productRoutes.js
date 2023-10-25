const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

router.get("/", productController.getProducts);
router.put("/:productId", productController.editProduct);

module.exports = router;
