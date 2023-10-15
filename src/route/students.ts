import { Router } from "express";
import { Student } from "../entities/Student";
import StudentController from "../controller/StudentController";
export const routerStudent = Router();
routerStudent.get("/", async (req, res) => {
  const studentController = new StudentController();

  try {
    const student = await studentController.getStudents();
    // if (student) {
    //   return res.status(200).json({
    //     ok: false,
    //     status: "failed",
    //     message: "Não foi possivel acessar os dados nesse momento",
    //   });
    // }

    return res.status(200).json({
      ok: true,
      status: "success",
      results: student,
      message: "",
    });
  } catch (error) {
    return res.status(200).json({
      ok: false,
      status: "fail",
      message: error,
    });
  }
});

routerStudent.get(`/:enrollment`, async (req, res) => {
  const { enrollment } = req.params;

  const studentController = new StudentController();
  try {
    const student = await studentController.getStudent(enrollment);
    // if (student) {
    //   return res.status(200).json({
    //     ok: false,
    //     status: "failed",
    //     message: "Não foi possivel acessar os dados nesse momento",
    //   });
    // }
    // console.log(student);
    return res.status(200).json({
      ok: true,
      status: "success",
      results: student,
      message: "",
    });
  } catch (error) {
    return res.status(200).json({
      ok: false,
      status: "fail",
      message: error,
    });
  }
});

routerStudent.put(`/:id`, async (req, res) => {
  const { id } = req.params;
  const { name, phone, gender, birthDate, enrollment } = req.body;
  const studentController = new StudentController();
  console.log({ name, phone, gender, birthDate, enrollment });
  // if (name === "" || enrollment === "") {
  //   return res.status(400).json({
  //     ok: false,
  //     status: "failed",
  //     message: "Não foi possivel salvar aluno",
  //   });
  // }

  try {
    const student = await studentController.getStudentId(id);

    if (!student) {
      return res.status(200).json({
        ok: false,
        status: "failed",
        message: "Não foi possivel acessar os dados nesse momento",
      });
    }
    const studentData = new Student();
    studentData.birthDate = birthDate || student.birthDate;
    studentData.enrollment = enrollment || student.enrollment;
    studentData.gender = gender || student.gender;
    studentData.name = name || student.name;
    studentData.phone = phone || student.phone;
    console.log(studentData);

    await studentController.putStudent(id, studentData);
    return res.status(200).json({
      ok: true,
      status: "success",
      // results: student,
      message: "Dados do aluno alterado com sucesso",
    });
  } catch (error) {
    return res.status(400).json({
      ok: false,
      status: "fail",
      message: error,
    });
  }
});
