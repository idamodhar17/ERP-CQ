import express from 'express';
import {
  addStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
  assignClass,
  getStudentIdCard,
  getStudentsByClass
} from '../controllers/studentController.mjs';
import protect from '../middleware/authMiddleware.mjs';

const router = express.Router();

router.post('/students', protect, addStudent);
router.get('/students', protect, getAllStudents);
router.get('/students/:id', protect, getStudentById);
router.put('/students/:id', protect, updateStudent);
router.delete('/students/:id', protect, deleteStudent);
router.put('/students/:id/assign-class', protect, assignClass);
router.get('/students/:id/id-card', protect, getStudentIdCard);
router.get('/class/:classId/students', protect, getStudentsByClass);

export default router;
