import gradeModel from "../model/gradeModel.js";

export const create = async (req, res) => {
  try {
    const newGrade = new gradeModel({
      gradeName: req.body.gradeName,
      classTeacher: req.body.classTeacher,
    });
    const savedGrade = await newGrade.save();
    res.status(200).json(savedGrade);
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

export const getAllGrade = async (req, res) => {
  try {
    const grades = await gradeModel.find({});

    res.status(200).json(grades);
  } catch (err) {
    res.send({ status: 500, message: "Cannot get all datas" });
  }
};

export const getGradeSingle = async (req, res) => {
  try {
    const getOneGrade = await gradeModel.findById(req.params.id);
    // console.log(getOneGrade,"getOneGrade")
    res.status(200).json(getOneGrade);
  } catch (err) {
    res.send({ status: 500, message: "Cannot get user data" });
  }
};

export async function updateGrade(req, res) {
  try {
    const updatedGrade = await gradeModel.findByIdAndUpdate(
      req.query._id,
      { $set: req.body },
      { new: true }
    );
    console.log(updatedGrade, "update");
    res.send({
      status: 200,
      message: "Succefully updated your profile",
      Result: updatedGrade,
    });
  } catch (err) {
    res.send({ status: 500, message: "Cannot get user data" });
  }
}

export async function gradeDelete(req, res) {
  try {
    await gradeModel.findByIdAndDelete(req.params.id);
    console.log(gradeDelete, "delete successfull");
    res.send({
      status: 200,
      message: "Deleted Successfully",
      Result: gradeDelete,
    });
  } catch (err) {
    res.send({ status: 500, message: "Cannot delete your data" });
  }
}
