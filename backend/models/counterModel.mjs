import mongoose from "mongoose";import mongoose from 'mongoose';

const counterSchema = new mongoose.Schema({
  type: { type: String, required: true, unique: true }, // e.g., 'student', 'invoice'
  seq: { type: Number, default: 0 }
});

const Counter = mongoose.model('Counter', counterSchema);
export default Counter;
