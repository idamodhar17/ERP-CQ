import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.mjs";
import resourceRoutes from './routes/resourceRoutes.mjs'
import authRoutes from "./routes/authRoutes.mjs";
import userRoutes from "./routes/userRoutes.mjs";
import studentRoutes from './routes/studentRoutes.mjs';

dotenv.config(); 

connectDB();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "*", credentials: true }));

app.use("/api/auth",authRoutes);
app.use("/api/register", userRoutes);
<<<<<<< Updated upstream
app.use('/api/resources', resourceRoutes);

export default app;
=======
app.use("/api/student", studentRoutes);

export default app;
>>>>>>> Stashed changes
