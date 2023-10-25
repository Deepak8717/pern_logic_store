const productService = require("../services/productServices");

const getProducts = async (req, res) => {
  try {
    const products = await productService.getProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const editProduct = async (req, res) => {
  const productId = req.params.productId;
  const newData = req.body;
  try {
    await productService.editProduct(productId, newData);
    res.json({ message: "Product updated sucessfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getProducts,
  editProduct,
};
