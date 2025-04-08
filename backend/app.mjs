import express from "express";
import mongoose from "mongoose";
import connectDB from './config/db.mjs';
import Notice from "./models/notices.mjs";

const app = express();

connectDB(); 
app.use(express.json());

// Create a new notice
app.post("/notices", async (req, res) => {
    console.log('Request Body:', req.body); 
    try {
        const { title, category, content } = req.body;
        const newNotice = new Notice({ title, category, content });
        await newNotice.save();
        res.status(201).json({ message: "Notice created successfully", notice: newNotice });
    } catch (err) {
        console.error("Error creating notice:", err); 
        res.status(500).json({ error: "Error creating notice", details: err.message });
    }
});

// Get notices
app.get("/notices", async (req, res) => {
    try {
        const { category } = req.query;
        let notices;
        if (category) {
            notices = await Notice.find({ category });
        } else {
            notices = await Notice.find();
        }
        res.status(200).json({ notices });
    } catch (err) {
        console.error("Error retrieving notices:", err); // log error details
        res.status(500).json({ error: "Error retrieving notices", details: err.message });
    }
});

app.listen(8080, () => {
    console.log("Server is listening on port: 8080");
});
