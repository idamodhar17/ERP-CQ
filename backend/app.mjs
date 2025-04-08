import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.mjs";

import authRoutes from "./routes/authRoutes.mjs";
import userRoutes from "./routes/userRoutes.mjs";
import { registerUser } from "./controllers/userController.mjs";

dotenv.config(); 

connectDB(); 

const app = express();

app.use(express.json());
app.use(cors({ origin: "*", credentials: true }));

app.use("/api/auth",authRoutes);
app.use("/api/register", registerUser);


export default app;
