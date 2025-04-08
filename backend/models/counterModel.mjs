import mongoose from "mongoose";

const counterSchema = new mongoose.Schema({
  academicYear: { type: String, required: true },
  class: { type: String, required: true },
  seq: { type: Number, default: 1 }
});

counterSchema.index({ academicYear: 1, class: 1 }, { unique: true });

const Counter = mongoose.model("Counter", counterSchema);
export default Counter;
