import express from "express";
import { loginUser } from "../controllers/authController.mjs";

const router = express.Router();

router.post("/login", loginUser);

export default router;