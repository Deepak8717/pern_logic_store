const productModel = require("../models/productModels");

const getProducts = async () => {
  return productModel.getAllProducts();
};

const editProduct = async (productId, newData) => {
  return productModel.editProduct(productId, newData);
};
module.exports = {
  getProducts,
  editProduct,
};
