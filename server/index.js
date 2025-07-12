import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import { connectDB } from "./database/connectDB.js";

import authRoutes from "./routes/auth.route.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`server is running on port ${PORT}`);
});
