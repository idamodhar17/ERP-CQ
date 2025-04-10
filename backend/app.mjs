import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.mjs";

import resourceRoutes from './routes/resourceRoutes.mjs'
import authRoutes from "./routes/authRoutes.mjs";
import userRoutes from "./routes/userRoutes.mjs";
import teacherRoutes from "./routes/teacherRoutes.mjs"
import studentRoutes from './routes/studentRoutes.mjs';
import classRoutes from "./routes/classRoutes.mjs";
import subjectRoutes from "./routes/subjectRoutes.mjs";
import noticeRoutes from "./routes/noticeRoutes.mjs";
import todoRoutes from "./routes/todoRoutes.mjs";

dotenv.config(); 

connectDB();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "*", credentials: true }));

app.use("/api/auth",authRoutes);
app.use("/api/register", userRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api/teacher', teacherRoutes);
app.use("/api/student", studentRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/subjects', subjectRoutes);
app.use('/api/notice', noticeRoutes);
app.use('/api/todo', todoRoutes);

export default app;

