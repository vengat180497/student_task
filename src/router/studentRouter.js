import {
  createStudent,
  updateStudent,
  getAllStudent,
  getOneStudent,
  deleteStudent,
  getAllStudentInGrade,
} from "../controller/studentController.js";
import express from "express";

const router = express.Router();

router.post("/add", createStudent);

router.post("/all/grade", getAllStudentInGrade);

router.get("/", getAllStudent);

router.get("/:id", getOneStudent);

router.put("/:id", updateStudent);

router.delete("/:id", deleteStudent);

export default router;
