import mongoose from 'mongoose';

const salarySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  baseSalary: { type: Number },
  paidStatus: { type: Boolean, default: false },
  paidDate: { type: Date }
});

const Salary = mongoose.model('Salary', salarySchema);
export default Salary;
