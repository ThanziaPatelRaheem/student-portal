import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import studentRoutes from "./routes/studentRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";

const app = express();
dotenv.config();

const PORT = 3000 || process.env.PORT;
app.use(express.json());
app.use(cors());

app.use("/api/v1/students", studentRoutes);
app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Backend is working");
});

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
