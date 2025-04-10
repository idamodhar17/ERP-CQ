import mongoose from 'mongoose';

const noticeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  category: {
    type: String,
    enum: ['Academic', 'Events', 'Urgent'],
    required: true
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  targetRoles: [{ type: String, enum: ['admin', 'teacher', 'accountant', 'parent'] }],
  date: { type: Date, default: Date.now },
  expiresAt: { type: Date }
});

const Notice = mongoose.model('Notice', noticeSchema);

export default Notice;
