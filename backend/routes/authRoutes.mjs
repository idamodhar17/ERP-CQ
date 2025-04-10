import express from "express";
import { loginUser, resetPassword } from "../controllers/authController.mjs";
import protect from "../middleware/authMiddleware.mjs";

const router = express.Router();

router.post("/login", loginUser);
router.put("/reset-password", protect, resetPassword);

export default router;