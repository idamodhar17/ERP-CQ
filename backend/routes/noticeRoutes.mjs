import express from "express";
import { createNotice, getAllNotices } from "../controllers/noticeController.mjs";
import protect from "../middleware/authMiddleware.mjs";

const router = express.Router();

router.post("/", protect, createNotice);
router.get("/", protect, getAllNotices);

export default router;