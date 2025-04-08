import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.mjs";

dotenv.config(); // Load .env variables

connectDB(); // Connect to MongoDB

const app = express();

app.use(express.json());
app.use(cors({ origin: "*", credentials: true }));


export default app;
