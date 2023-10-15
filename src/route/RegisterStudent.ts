import { Router } from "express";
import { Student } from "../entities/Student";
import StudentController from "../controller/StudentController";
export const routerRegisterStudent = Router();
routerRegisterStudent.post("/", async (req, res) => {
  const { name, phone, gender, birthDate, enrollment } = req.body;
  const studentController = new StudentController();
  if (name === "" || enrollment === "") {
    return res.status(200).json({
      ok: false,
      status: "failed",
      message: "Não foi possivel salvar aluno",
    });
  }

  const student = await studentController.getStudent(enrollment);
  if (student) {
    return res.status(200).json({
      ok: false,
      status: "failed",
      message: "Estudante ja cadastrado",
    });
  }

  try {
    const newstudent = new Student();
    newstudent.birthDate = birthDate;
    newstudent.enrollment = enrollment;
    newstudent.gender = gender;
    newstudent.name = name;
    newstudent.phone = phone;

    await studentController.save(newstudent);
    return res.status(200).json({
      ok: true,
      status: "success",
      message: "Novo estudante cadastrado com sucesso",
    });
  } catch (error) {
    return res.status(200).json({
      ok: false,
      status: "fail",
      message: "Falha ao salvar novo estudante",
    });
  }
});
