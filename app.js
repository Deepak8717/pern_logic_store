const express = require("express");
const pool = require("./config/db");
const app = express();
const port = 5000;
const productRoutes = require("./src/routes/productRoutes");

app.use(express.json());
app.use("/products", productRoutes);

app.listen(port, async () => {
  console.log(`Server is running on ${port}`);
});
