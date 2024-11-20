import { Request, Response } from 'express';
import { StudentService } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    //will call service function to send this data
    const result = await StudentService.createStudentIntoDB(studentData);

    // send response

    res.status(200).json({
      success: true,
      message: 'student is created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getAllStudentFromDB();
    // res.send(result)
    res.status(200).json({
      success: true,
      message: 'successfully get the students data',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.studentId;
    const result = await StudentService.getSingleStudentFromDB(id);
    // res.send(result)
    res.status(200).json({
      success: true,
      message: 'successfully get the students data',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentController = {
  createStudent,
  getStudent,
  getSingleStudent,
};
