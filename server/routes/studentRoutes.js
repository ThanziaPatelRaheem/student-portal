import express from "express";
import {
  addStudent,
  deleteStudent,
  getAllStudents,
  updateStudent,
} from "../controllers/studentController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, addStudent);
router.get("/", protect, getAllStudents);
router.patch("/:id", protect, updateStudent);
router.delete("/:id", protect, deleteStudent);
export default router;
