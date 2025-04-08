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

// Role-specific schemas
const adminSchema = {
  employeeId: { type: String, unique: true },
  accessLevel: { type: Number, default: 1 },
  joiningDate: { type: Date },
  designation: { type: String, default: "Admin" }
};

const accountantSchema = {
  employeeId: { type: String, unique: true },
  salary: { type: mongoose.Schema.Types.ObjectId, ref: 'Salary' },
  joiningDate: { type: Date },
  designation: { type: String, default: "Accountant" }
};

const teacherSchema = {
  employeeId: { type: String, unique: true },
  subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }],
  assignedClasses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Class' }],
  qualification: { type: String },
  specialization: { type: String },
  joiningDate: { type: Date },
  isClassTeacher: { type: Boolean, default: false }
};

const parentSchema = {
  studentId: { type: String, unique: true, sparse: true },
  admissionDate: { type: Date },
  standard: { type: String, required: true },
  division: { type: String },
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  idCardUrl: { type: String },
  isActive: { type: Boolean, default: true },
  academicYear: { type: String },

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

// Unified schema
const userSchema = new mongoose.Schema({
  ...commonSchema,
  ...adminSchema,
  ...accountantSchema,
  ...teacherSchema,
  ...parentSchema
}, { discriminatorKey: 'role' });

// Auto studentId
userSchema.pre("save", async function (next) {
  if (this.role !== "parent" || this.studentId) return next();

  try {
    const counter = await Counter.findOneAndUpdate(
      { type: "student" },
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
