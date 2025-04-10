import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  task: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class'
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject'
  },
  category: {
    type: String,
    enum: ['Grading', 'Meeting', 'Assignment', 'Follow-up', 'Other'],
    default: 'Other'
  },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    default: 'Medium'
  },
  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Completed'],
    default: 'Pending'
  },
  isCompleted: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Date
  },
  dueDate: {
    type: Date
  },
  attachmentUrl: {
    type: String // Can store file URL or cloud link
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Auto-set completedAt when status is updated to 'Completed'
todoSchema.pre('save', function (next) {
  if (this.isModified('status') && this.status === 'Completed') {
    this.isCompleted = true;
    this.completedAt = new Date();
  }
  next();
});

const Todo = mongoose.model('Todo', todoSchema);
export default Todo;
