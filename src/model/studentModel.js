import mongoose from "mongoose";

const { Schema } = mongoose;

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },

    gradeID: {
      type: String,
      required: true,
      ref: "Grade",
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female", "other"],
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Student", studentSchema);
