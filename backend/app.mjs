import express from "express";
// import mongoose from "mongoose";
import connectDB from './config/db.mjs';
import Notice from "./models/notices.mjs";
import methodOverride from "method-override";
import Todo from "./models/todo.mjs";
import Resource from "./models/resources.mjs";

import path from 'path';
import { fileURLToPath } from 'url';

//Resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

connectDB();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
// app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

////NOTICES API'S/////

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

/////TODO API'S/////


//CREATE ROUTE
app.post("/todo", async (req, res) => {
    try {
        let { title, description, dueDate, priority, assignedTo } = req.body;

        if (priority) {
            priority = priority.toLowerCase(); // normalize case
        }

        const newTodo = new Todo({ title, description, dueDate, priority, assignedTo });
        await newTodo.save();
        res.status(201).json({ message: "TODO created successfully", notice: newTodo });
    } catch (err) {
        console.error("Error creating Todo:", err);
        res.status(500).json({ message: err.message });
    }
});


//UPADATE ROUTE 
app.put("/todo/:id", async (req, res) => {
    try {
        const { id } = req.params;  // Use 'id' from req.params
        const { title, description, dueDate, priority, assignedTo, status } = req.body;

        const updatedTodo = await Todo.findByIdAndUpdate(id, {
            title, description, dueDate, priority, assignedTo, status
        }, { new: true });

        if (!updatedTodo) {
            return res.status(404).json({ message: "Todo not found" });
        }

        res.status(200).json({ message: "Todo updated successfully", notice: updatedTodo });
    } catch (err) {
        console.error("Error retrieving Todo:", err);
        res.status(500).json({ message: err.message });
    }
});

// DELETE ROUTE
app.delete("/todo/:id", async (req, res) => {
    try {
        const { id } = req.params;  // Access the 'id' from req.params
        const deleteTodo = await Todo.findByIdAndDelete(id);  // Use 'id' to find and delete the todo

        if (!deleteTodo) {
            return res.status(404).json({ message: "Todo not found" });
        }

        res.status(200).json({ message: "Todo deleted successfully" });
    } catch (err) {
        console.error("Error retrieving Todo:", err);
        res.status(500).json({ message: err.message });
    }
});

//SHOW ROUTE
app.get("/todo/:id", async (req, res) => {
    try {
        const { id } = req.params;  // Use 'req.params' to access the 'id' from the URL parameter
        const todo = await Todo.findById(id);

        if (!todo) {
            return res.status(404).json({ message: "TODO not found" });
        }

        res.status(200).json(todo);
    } catch (err) {
        console.error("Error retrieving Todo:", err);
        res.status(500).json({ message: err.message });
    }
});


///////       Homework & Resources APIS:-

// CREATE ROUTE

app.use(express.json());  // Make sure to include this middleware
app.post("/resources", async (req, res) => {
    try {
        const { title, description, file, className, subject } = req.body;
        const newResource = new Resource({ title, description, file, className, subject });
        await newResource.save();
        res.status(201).json({ message: "Resource created successfully", resource: newResource });
    } catch (err) {
        console.error("Error creating resource:", err);
        res.status(500).json({ message: err.message });
    }
});


//SHOW ROUTE
import mongoose from 'mongoose';

app.get("/resources/:id", async (req, res) => {
    try {
        const { id } = req.params;

        // Validate if the id is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ObjectId format" });
        }

        const resource = await Resource.findById(id);
        if (!resource) {
            return res.status(404).json({ message: "Resource not found" });
        }

        res.status(200).json(resource);
    } catch (err) {
        console.error("Error retrieving resource:", err);
        res.status(500).json({ message: err.message });
    }
});




//UPDATE ROUTE
app.put("/resources/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, file, className, subject } = req.body;


        const updatedResource = await Resource.findByIdAndUpdate(
            id,
            { title, description, file, className, subject},
            { new: true }
        );

        if (!updatedResource) {
            return res.status(404).json({ message: "Resource not found" });
        }
        res.status(200).json({ message: "Resource updated successfully", resource: updatedResource });
    } catch (err) {
        console.error("Error updating resource:", err);
        res.status(500).json({ message: err.message });
    }
});



//DELETE ROUTE
app.delete("/resources/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedResource = await Resource.findByIdAndDelete(id);

        if (!deletedResource) {
            return res.status(404).json({ message: "Resource not found" });
        }
        res.status(200).json({ message: "Resource deleted successfully" });
    } catch (err) {
        console.error("Error deleting resource:", err);
        res.status(500).json({ message: err.message });
    }
});


const PORT = process.env.PORT || 8080;

app.listen(8080, () => {
    console.log("Server is listening on port: 8080");
});
