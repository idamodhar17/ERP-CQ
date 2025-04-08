import mongoose from 'mongoose';
import Counter from './counterModel.mjs';

const commonSchema = {
  name: { type: String, required: true },
  email: { type: String, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'teacher', 'accountant', 'parent'], required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  dob: { type: String, required: true },
  contactNumber: { type: String, required: true, unique: true },
  address: { type: String },
  photo: { type: String },
  createdAt: { type: Date, default: Date.now }
};

// Admin
const adminSchema = {
  employeeId: { type: String, unique: true, sparse: true },
  accessLevel: { type: Number, default: 1 },
  joiningDate: { type: Date },
  designation: { type: String, default: "Admin" }
};

// Accountant
const accountantSchema = {
  employeeId: { type: String, unique: true, sparse: true },
  salary: { type: mongoose.Schema.Types.ObjectId, ref: 'Salary' },
  joiningDate: { type: Date },
  designation: { type: String, default: "Accountant" }
};

// Teacher
const teacherSchema = {
  employeeId: { type: String, unique: true, sparse: true },
  subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }],
  assignedClasses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Class' }],
  qualification: { type: String },
  specialization: { type: String },
  joiningDate: { type: Date },
  isClassTeacher: { type: Boolean, default: false }
};

// Parent (Student Info)
const parentSchema = {
  studentId: { type: String, unique: true, sparse: true },
  admissionDate: { type: Date },
  standard: {
    type: String,
    required: function () {
      return this.role === 'parent';
    }
  },
  division: { type: String },
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  idCardUrl: { type: String },
  isActive: { type: Boolean, default: true },
  academicYear: {
    type: String,
    required: function () {
      return this.role === 'parent';
    }
  },
  fatherInfo: {
    name: String, occupation: String, phone: String, photo: String
  },
  motherInfo: {
    name: String, occupation: String, phone: String, photo: String
  },
  guardianInfo: {
    relation: { type: String, enum: ["Brother", "Sister", "Others"] },
    name: String, otherRelation: String,
    email: String, phone: String,
    occupation: String, address: String
  }
};

// Final Unified Schema
const userSchema = new mongoose.Schema({
  ...commonSchema,
  ...adminSchema,
  ...accountantSchema,
  ...teacherSchema,
  ...parentSchema
}, { discriminatorKey: 'role' });

// Pre-save: Generate studentId & default email for parents
userSchema.pre("save", async function (next) {
  if (this.role !== "parent" || this.studentId) return next();

  try {
    const counter = await Counter.findOneAndUpdate(
      { academicYear: this.academicYear, class: this.standard },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );

    const today = new Date();
    const date = `${today.getFullYear()}${(today.getMonth() + 1).toString().padStart(2, '0')}${today.getDate().toString().padStart(2, '0')}`;
    this.studentId = `2025${counter.seq.toString().padStart(4, '0')}${date}`;

    if (!this.email) {
      this.email = `${this.studentId}@school.edu`;
    }

    next();
  } catch (err) {
    next(err);
  }
});

const User = mongoose.model('User', userSchema);
export default User;
