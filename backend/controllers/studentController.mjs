import User from '../models/user.mjs';
import Fee from '../models/feeModel.mjs';
import Attendance from '../models/attendanceModel.mjs';
import Class from "../models/classModel.mjs";

// Add student
export const addStudent = async (req, res) => {
  try {
    const student = new User({ ...req.body, role: "parent" });
    await student.save();
    res.status(201).json({ message: "Student added", student });
  } catch (err) {
    res.status(400).json({ message: "Failed to add student", error: err.message });
  }
};

// Get all students
export const getAllStudents = async (req, res) => {
  try {
    const students = await User.find({ role: "parent" }).populate('class');
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch students", error: err.message });
  }
};

// Get student by studentId
export const getStudentById = async (req, res) => {
  try {
    const student = await User.findOne({ studentId: req.params.id, role: 'parent' })
      .populate('class');
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch student", error: err.message });
  }
};

// Update student
export const updateStudent = async (req, res) => {
  try {
    const student = await User.findOneAndUpdate(
      { studentId: req.params.id, role: "parent" },
      req.body,
      { new: true }
    );
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json({ message: "Student updated", student });
  } catch (err) {
    res.status(400).json({ message: "Failed to update student", error: err.message });
  }
};

// Delete student
export const deleteStudent = async (req, res) => {
  try {
    const result = await User.findOneAndDelete({ studentId: req.params.id, role: "parent" });
    if (!result) return res.status(404).json({ message: "Student not found" });
    res.json({ message: "Student deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete student", error: err.message });
  }
};

// Assign class
export const assignClass = async (req, res) => {
  const { classId, standard, division } = req.body;
  try {
    const student = await User.findOneAndUpdate(
      { studentId: req.params.id, role: "parent" },
      { class: classId, standard, division },
      { new: true }
    );
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json({ message: "Class assigned", student });
  } catch (err) {
    res.status(400).json({ message: "Failed to assign class", error: err.message });
  }
};

// Get student ID card
export const getStudentIdCard = async (req, res) => {
  try {
    const student = await User.findOne({ studentId: req.params.id, role: "parent" }).populate("class");
    if (!student) return res.status(404).json({ message: "Student not found" });

    const idCard = {
      name: student.name,
      studentId: student.studentId,
      class: student.class?.standard,
      division: student.class?.division,
      academicYear: student.academicYear,
      photo: student.photo,
      idCardUrl: student.idCardUrl,
    };

    res.json(idCard);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch ID card", error: err.message });
  }
};

// Get student by class
export const getStudentsByClass = async (req, res) => {
  try {
    const students = await User.find({ class: req.params.classId, role: 'parent' }).populate('class');
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch students", error: err.message });
  }
};
