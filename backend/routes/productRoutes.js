import express from "express";

import {
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();


// Add Product
router.post("/", addProduct);


// Get All Products
router.get("/", getProducts);


// Update Product
router.put("/:id", updateProduct);


// Delete Product
router.delete("/:id", deleteProduct);


export default router;