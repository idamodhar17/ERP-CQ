import Class from "../models/classModel.mjs";
import User from "../models/User.mjs";

export const createClass = async (req, res) => {
  try {
    const newClass = new Class(req.body);
    await newClass.save();
    res.status(201).json({ message: "Class created", class: newClass });
  } catch (err) {
    res.status(400).json({ message: "Failed to create class", error: err.message });
  }
};

export const getAllClasses = async (req, res) => {
  try {
    const classes = await Class.find()
      .populate("classTeacher", "name")
      .populate("subjects");
    res.json(classes);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch classes", error: err.message });
  }
};

export const updateClass = async (req, res) => {
  try {
    const updatedClass = await Class.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedClass) return res.status(404).json({ message: "Class not found" });
    res.json({ message: "Class updated", class: updatedClass });
  } catch (err) {
    res.status(400).json({ message: "Failed to update class", error: err.message });
  }
};

export const deleteClass = async (req, res) => {
  try {
    const deleted = await Class.findOneAndDelete({ _id: req.params.id });
    if (!deleted) return res.status(404).json({ message: "Class not found" });
    res.json({ message: "Class deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete class", error: err.message });
  }
};

export const assignClassTeacher = async (req, res) => {
  const { teacherId } = req.body;
  try {
    const teacher = await User.findById(teacherId);
    if (!teacher || teacher.role !== "teacher") {
      return res.status(400).json({ message: "Invalid teacher ID" });
    }

    const updatedClass = await Class.findByIdAndUpdate(
      req.params.id,
      { classTeacher: teacherId },
      { new: true }
    );

    if (!updatedClass) return res.status(404).json({ message: "Class not found" });

    res.json({ message: "Class teacher assigned", class: updatedClass });
  } catch (err) {
    res.status(400).json({ message: "Failed to assign class teacher", error: err.message });
  }
};
