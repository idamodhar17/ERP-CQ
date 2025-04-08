import mongoose from 'mongoose';

const feeSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  totalAmount: { type: Number, required: true },
  paidAmount: { type: Number, default: 0 },
  discount: { type: Number, default: 0 },
  isWaived: { type: Boolean, default: false },
  dueDate: { type: Date },
  status: { type: String, enum: ['Paid', 'Unpaid', 'Partial'], default: 'Unpaid' },
  transactions: [{
    date: Date,
    amount: Number,
    mode: String
  }]
});

const Fee = mongoose.model('Fee', feeSchema);
export default Fee;
