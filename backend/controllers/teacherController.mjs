import Subject from "../models/subjectModel.mjs";
import User from "../models/user.mjs";

export const createTeacher = async (req, res) => {
  try {
    const newTeacher = new User({ ...req.body, role: 'teacher' });
    await newTeacher.save();
    res.status(201).json(newTeacher);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAllTeachers = async (req, res) => {
  try {
    const teachers = await User.find({ role: 'teacher' })
      .populate('subjects')
      .populate('assignedClasses');
    res.status(200).json(teachers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTeacherById = async (req, res) => {
  try {
    const teacher = await User.findOne({ _id: req.params.id, role: 'teacher' })
      .populate('subjects')
      .populate('assignedClasses');
    if (!teacher) return res.status(404).json({ message: 'Teacher not found' });
    res.status(200).json(teacher);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateTeacher = async (req, res) => {
  try {
    const updatedTeacher = await User.findOneAndUpdate(
      { _id: req.params.id, role: 'teacher' },
      req.body,
      { new: true }
    );
    if (!updatedTeacher) return res.status(404).json({ message: 'Teacher not found' });
    res.status(200).json(updatedTeacher);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteTeacher = async (req, res) => {
  try {
    const deleted = await User.findOneAndDelete({ _id: req.params.id, role: 'teacher' });
    if (!deleted) return res.status(404).json({ message: 'Teacher not found' });
    res.status(200).json({ message: 'Teacher deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const assignSubjectsAndClasses = async (req, res) => {
    try {
      const { subjects, assignedClasses, isClassTeacher } = req.body;
      const teacherId = req.params.id;
  
      const teacher = await User.findOneAndUpdate(
        { _id: teacherId, role: 'teacher' },
        {
          $set: {
            subjects,
            assignedClasses,
            isClassTeacher
          }
        },
        { new: true }
      ).populate('subjects assignedClasses');
  
      if (!teacher) return res.status(404).json({ message: 'Teacher not found' });
  
      if (subjects?.length > 0) {
        await Subject.updateMany(
          { _id: { $in: subjects } },
          { $set: { teacher: teacherId } }
        );
      }
  
      res.status(200).json(teacher);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
