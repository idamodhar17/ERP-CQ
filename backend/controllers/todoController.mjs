import Todo from "../models/todoModel.mjs";

export const createTodo = async (req, res) => {
    try {
        const newTodo = new Todo(req.body);
        await newTodo.save();
        res.status(201).json({ message: "To-Do created", todo: newTodo });
    } catch (err) {
        res.status(400).json({ message: "Failed to create To-Do", error: err.message });
    }
};

export const getTodos = async (req, res) => {
    try {
        const query = {};
        if (req.query.teacherId) query.teacher = req.query.teacherId;
        if (req.query.status) query.status = req.query.status;
        if (req.query.priority) query.priority = req.query.priority;
        if (req.query.classId) query.class = req.query.classId;
        if (req.query.subjectId) query.subject = req.query.subjectId;

        const todos = await Todo.find(query)
            .populate("teacher", "name")
            .populate("student", "name studentId")
            .populate("class", "standard division")
            .populate("subject", "name");

        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch To-Dos", error: err.message });
    }
};

export const updateTodo = async (req, res) => {
    try {
        const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!updated) return res.status(404).json({ message: "To-Do not found" });
        res.json({ message: "To-Do updated", todo: updated });
    } catch (err) {
        res.status(400).json({ message: "Failed to update To-Do", error: err.message });
    }
};

export const deleteTodo = async (req, res) => {
    try {
        const deleted = await Todo.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: "To-Do not found" });

        res.json({ message: "To-Do deleted" });
    } catch (err) {
        res.status(500).json({ message: "Failed to delete To-Do", error: err.message });
    }
};

