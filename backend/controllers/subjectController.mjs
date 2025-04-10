import Subject from "../models/subjectModel.mjs";
import Class from "../models/classModel.mjs"
import User from "../models/User.mjs";

export const createSubject = async (req, res) => {
    const { name, code, classId, teacherId } = req.body;

    try {
        const subject = new Subject({ name, code, class: classId, teacher: teacherId });
        await subject.save();

        await Class.findByIdAndUpdate(classId, { $push: { subjects: subject._id } });

        await User.findByIdAndUpdate(teacherId, { $push: { subjects: subject._id } });

        res.status(201).json({ message: "Subject Created", subject });
    } catch (err) {
        res.status(400).json({ message: "Failed to create subject", error: err.message });
    }
};

export const getAllSubjects = async (req, res) => {
    try {
        const subjects = await Subject.find().populate('class').populate('teacher', 'name');
        res.json(subjects);
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch subjects", error: err.message });
    }
};

export const getSubjectById = async (req, res) => {
    try {
        const subject = await Subject.findById(req.params.id).populate('class').populate('teacher', 'name');
        if (!subject) return res.status(404).json({ message: "Subject not found" });
        res.json(subject);
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch subject", error: err.message });
    }
};

export const updateSubject = async (req, res) => {
    try {
        const updated = await Subject.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: "Subject not found" });
        res.json({ message: "Subject Updated", subject: updated });
    } catch (err) {
        res.status(400).json({ message: "Failed to update subject", error: err.message });
    }
};

export const deleteSubject = async (req, res) => {
    try {
        const subject = await Subject.findByIdAndDelete(req.params.id);
        if (!subject) return res.status(404).json({ message: "Subject is not found" });

        await Class.findByIdAndUpdate(subject.class, { $pull: { subjects: subject._id } });
        await User.findByIdAndUpdate(subject.teacher, { $pull: { subjects: subject._id } });

        res.json({ message: "Subject deleted" });
    } catch (err) {
        res.status(500).json({ message: "Failed to delete subject", error: err.message });
    }
};