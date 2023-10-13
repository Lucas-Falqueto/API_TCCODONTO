import AppDataSource from "../data-source";
import { Student } from "../entities/Student";

export default class StudentController {
  async save(student) {
    const studentTable = AppDataSource.getRepository(Student);
    const newStudent: Student = student;
    return await studentTable.save(newStudent);
  }

  // async getUserEmail(email) {
  //   const user = await AppDataSource.manager.findOneBy(Dentist, {
  //     email: email,
  //   });
  //   return user;
  // }

  async getStudent(enrollment) {
    const student = await AppDataSource.manager.findOneBy(Student, {
      enrollment: enrollment,
    });

    return student;
  }
}
