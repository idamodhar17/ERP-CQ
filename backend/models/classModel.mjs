import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
  standard: { type: String, required: true },
  division: { type: String, required: true },
  classTeacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }]
});

const Class = mongoose.model('Class', classSchema);
export default Class;