import mongoose from 'mongoose';

const homeworkSchema = new mongoose.Schema({
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: String,
  dueDate: Date,
  attachments: [String],
  createdAt: { type: Date, default: Date.now }
});

const Homework = mongoose.model('Homework', homeworkSchema);
export default Homework;
