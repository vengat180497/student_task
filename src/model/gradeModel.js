import mongoose from "mongoose";
const { Schema } = mongoose;

const gradeSchema = new mongoose.Schema(
  {
    gradeName: {
      type: String,
      required: true,
    },
    classTeacher: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Grade", gradeSchema);
