import mongoose from 'mongoose';

const academicCalendarSchema = new mongoose.Schema({
  title: String,
  date: Date,
  description: String,
  isHoliday: { type: Boolean, default: false }
});

const AcademicCalendar = mongoose.model('AcademicCalendar', academicCalendarSchema);
export default AcademicCalendar;
