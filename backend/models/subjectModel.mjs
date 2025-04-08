import mongoose from "mongoose";

const subjectSchema = new mongoose.model({
    name: { type: String, required: true },
    code: { type: String },
    class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Subject = mongoose.model('Subject', subjectSchema);

export default Subject;