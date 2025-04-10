// models/Todo.mjs
import mongoose from 'mongoose';

// Define the schema
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // Title is required
  },
  description: {
    type: String,
    required: false, // Description is optional
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending', // Default status is "pending"
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set to current time
  },
  updatedAt: {
    type: Date,
    default: Date.now, // Automatically set to current time
  },
  dueDate: {
    type: Date, // Optional due date for the task
    required: false,
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'], // Check what's actually defined here
    default: 'medium'
},

});

// Create a model from the schema
const Todo = mongoose.model('Todo', todoSchema);

export default Todo;



