
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import db from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();


// ===============================
// MIDDLEWARE
// ===============================

app.use(cors());

app.use(express.json());


// ===============================
// ROUTES
// ===============================

app.use("/api/products", productRoutes);


// ===============================
// HOME ROUTE
// ===============================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Product Management API is running",
  });
});


// ===============================
// START SERVER
// ===============================

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Test database connection
    const connection = await db.getConnection();

    console.log("MySQL Database Connected Successfully");

    connection.release();

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("Database Connection Failed:");
    console.log(error.message);
  }
};

startServer();