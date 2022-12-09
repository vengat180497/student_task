import {
  create,
  getAllGrade,
  getGradeSingle,
  updateGrade,
  gradeDelete,
} from "../controller/gradeController.js";
import express from "express";

const router = express.Router();

router.post("/add", create);

router.get("/", getAllGrade);

router.get("/:id", getGradeSingle);

router.put("/", updateGrade);

router.delete("/:id", gradeDelete);

export default router;
