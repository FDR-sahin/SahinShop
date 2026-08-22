import db from "../config/db.js";

// ===============================
// ADD PRODUCT
// ===============================

export const addProduct = async (req, res) => {
  try {
    const {
      product_name,
      category,
      brand,
      unit_price,
      stock_quantity,
      discount,
      product_status,
    } = req.body;

    // Product name check
    if (!product_name || product_name.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Product name is required",
      });
    }

    // Unit price check
    if (unit_price === undefined || unit_price === "") {
      return res.status(400).json({
        success: false,
        message: "Unit price is required",
      });
    }

    if (Number(unit_price) < 0) {
      return res.status(400).json({
        success: false,
        message: "Unit price cannot be negative",
      });
    }

    // Stock check
    if (stock_quantity === undefined || stock_quantity === "") {
      return res.status(400).json({
        success: false,
        message: "Stock quantity is required",
      });
    }

    if (Number(stock_quantity) < 0) {
      return res.status(400).json({
        success: false,
        message: "Stock quantity cannot be negative",
      });
    }

    // Discount
    const productDiscount =
      discount === undefined || discount === ""
        ? 0
        : Number(discount);

    if (productDiscount < 0) {
      return res.status(400).json({
        success: false,
        message: "Discount cannot be negative",
      });
    }

    const status = product_status || "Active";

    const sql = `
      INSERT INTO Product
      (
        product_name,
        category,
        brand,
        unit_price,
        stock_quantity,
        discount,
        product_status
      )
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      product_name.trim(),
      category || null,
      brand || null,
      Number(unit_price),
      Number(stock_quantity),
      productDiscount,
      status,
    ];

    const [result] = await db.execute(sql, values);

    return res.status(201).json({
      success: true,
      message: "Product added successfully",
      productId: result.insertId,
    });
  } catch (error) {
    console.log("Add Product Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to add product",
      error: error.message,
    });
  }
};


// ===============================
// GET ALL PRODUCTS
// ===============================

export const getProducts = async (req, res) => {
  try {
    const sql = `
      SELECT *
      FROM Product
      ORDER BY product_id DESC
    `;

    const [products] = await db.execute(sql);

    return res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    console.log("Get Products Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to get products",
      error: error.message,
    });
  }
};

// ===============================
// UPDATE PRODUCT
// ===============================

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      product_name,
      category,
      brand,
      unit_price,
      stock_quantity,
      discount,
      product_status,
    } = req.body;

    // Product name required
    if (!product_name || product_name.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Product name is required",
      });
    }

    // Price validation
    if (unit_price === undefined || unit_price === "") {
      return res.status(400).json({
        success: false,
        message: "Unit price is required",
      });
    }

    if (Number(unit_price) < 0) {
      return res.status(400).json({
        success: false,
        message: "Unit price cannot be negative",
      });
    }

    // Stock validation
    if (stock_quantity === undefined || stock_quantity === "") {
      return res.status(400).json({
        success: false,
        message: "Stock quantity is required",
      });
    }

    if (Number(stock_quantity) < 0) {
      return res.status(400).json({
        success: false,
        message: "Stock quantity cannot be negative",
      });
    }

    const productDiscount =
      discount === undefined || discount === ""
        ? 0
        : Number(discount);

    if (productDiscount < 0) {
      return res.status(400).json({
        success: false,
        message: "Discount cannot be negative",
      });
    }

    const status = product_status || "Active";

    const sql = `
      UPDATE Product
      SET
        product_name = ?,
        category = ?,
        brand = ?,
        unit_price = ?,
        stock_quantity = ?,
        discount = ?,
        product_status = ?
      WHERE product_id = ?
    `;

    const values = [
      product_name.trim(),
      category || null,
      brand || null,
      Number(unit_price),
      Number(stock_quantity),
      productDiscount,
      status,
      id,
    ];

    const [result] = await db.execute(sql, values);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
    });

  } catch (error) {
    console.log("Update Product Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update product",
      error: error.message,
    });
  }
};


// ===============================
// DELETE PRODUCT
// ===============================

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const sql = `
      DELETE FROM Product
      WHERE product_id = ?
    `;

    const [result] = await db.execute(sql, [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });

  } catch (error) {
    console.log("Delete Product Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete product",
      error: error.message,
    });
  }
};