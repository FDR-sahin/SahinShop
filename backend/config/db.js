// import mongoose from "mongoose";

// const connectDB = async() => {
//     try {
//         await mongoose.connect(process.env.MONGO_URL);
//         console.log("mongoDB connect successfull");
        
//     } catch (err) {
//         console.error("mongoDB connect Faild", err.message);
//         process.exit(1);
//     }
// }
// export default connectDB;



import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default db;