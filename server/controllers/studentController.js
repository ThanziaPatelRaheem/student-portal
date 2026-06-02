import express from "express";
import Student from "../models/student.js";

export const addStudent = async (req, res) => {
  try {
    const { name, course } = req.body;

    if (!name || !course) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const student = await Student.create({
      name,
      course,
      createdBy: req.user._id,
    });

    res.status(201).json({
      success: true,
      student,
      message: "Student created successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const allStudent = await Student.find({ createdBy: req.user._id });

    res.status(200).json({
      success: true,
      allStudent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, course } = req.body;

    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      { name, course },
      { new: true },
    );

    if (!updatedStudent) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.status(200).json({
      success: true,
      updatedStudent,
      message: "Student Updated Successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const removeStudent = await Student.findByIdAndDelete(id);

    if (!removeStudent) {
      return res.status(404).json({
        message: "Student was not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Student Deleted!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};
