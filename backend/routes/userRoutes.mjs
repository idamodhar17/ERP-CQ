import express from "express";
import { registerUser } from "../controllers/userController.mjs";

const router = express.Router();

router.post("/user", registerUser);

export default router;