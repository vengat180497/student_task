import studentModel from "../model/studentModel.js";
import gradeModel from "../model/gradeModel.js";

export const createStudent = async (req, res, next) => {
  try {
    const savedStudent = await studentModel.create({
      ...req.body,
    });

    res.send({
      status: 200,
      message: "Succefully created",
      Result: savedStudent,
    });
  } catch (err) {
    res.send({ status: 500, message: err.message });
  }
};

export const updateStudent = async (req, res, next) => {
  try {
    const updatedStudent = await studentModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    console.log(updatedStudent, "update");
    res.send({
      status: 200,
      message: "Succefully updated",
      Result: updatedStudent,
    });
  } catch (err) {
    res.send({ status: 500, message: "Cannot update" });
    next(err);
  }
};

export const getAllStudent = async (req, res, next) => {
  try {
    console.log("object triggered");
    const studentsList = await studentModel.find({});
    res.send({
      status: 200,
      message: "Succefully fetched all data",
      Result: studentsList,
    });
  } catch (err) {
    res.status(404).json({ message: "No Data Found" });
  }
};

export const getOneStudent = async (req, res, next) => {
  try {
    const getstudent = await studentModel.findById(req.params.id);
    res.send({
      status: 200,
      message: "Succefully fetched data",
      Result: getstudent,
    });
  } catch (err) {
    res.status(404).json({ message: "Cannot fetch the required data" });

    next(err);
  }
};

export const getAllStudentInGrade = async (req, res) => {
  try {
    const studentsList = await studentModel
      .find({ gradeID: req.query.gradeID })
      .populate("gradeID");
    // console.log("update")
    res.send({
      status: 200,
      message: "Succefully fetched all data",
      Result: studentsList,
    });
  } catch (err) {
    res.status(404).json({ message: "No Data Found" });
  }
};

//delete
export const deleteStudent = async (req, res, next) => {
  const gradeId = req.params.gradeId;

  try {
    await studentModel.findByIdAndDelete(req.params.id);
    try {
      await gradeModel.findByIdAndUpdate(gradeId, {
        $pull: { studentsList: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.send({
      status: 200,
      message: "Succefully deleted data",
    });
  } catch (err) {
    res.status(404).send("Cannot delete the data");
    next(err);
  }
};
