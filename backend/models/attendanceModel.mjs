import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  date: { type: Date, required: true },
  records: [{
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: { type: String, enum: ['Present', 'Absent', 'Holiday'] }
  }]
});

const Attendance = mongoose.model('Attendance', attendanceSchema);
export default Attendance;
