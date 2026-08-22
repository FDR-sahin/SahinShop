// import express from "express";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";
// import User from "./models/User.js";

// dotenv.config();

// const app = express();
// app.use(express.json());

// // console.log(process.env.PORT);

// connectDB();

// app.post("/users", async (req, res) => {
//   try {
//     const user = await User.create(req.body);
//     res.status(200).json(user);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// const PORT = process.env.PORT || 500;

// app.listen(PORT, () => {
//   console.log(`Server is running on port: ${PORT}`);
// });



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