import express from "express";
import { createClass, getAllClasses, updateClass, deleteClass, assignClassTeacher } from "../controllers/classController.mjs";

const router = express.Router();

router.post('/', createClass);
router.get('/', getAllClasses);
router.put('/:id', updateClass);
router.delete('/:id', deleteClass);
router.put('/:id/assign-class-teacher', assignClassTeacher);

export default router;

