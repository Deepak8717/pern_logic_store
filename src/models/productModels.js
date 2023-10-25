const db = require("../../config/db");

const getAllProducts = async () => {
  try {
    const getProductsQuery = "Select * from products";
    const { rows } = await db.query(getProductsQuery);
    return rows;
  } catch (error) {
    throw error;
  }
};

const editProduct = async (productId, newData) => {
  console.log(productId, newData);
  try {
    const editProductQuery =
      "Update products set name = $1, price =$2, description = $3, image_url = $4 where product_id = $5";
    const { name, price, description, image_url } = newData;
    await db.query(editProductQuery, [
      name,
      price,
      description,
      image_url,
      productId,
    ]);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllProducts,
  editProduct,
};
