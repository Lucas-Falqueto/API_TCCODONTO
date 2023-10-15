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
  async getStudentId(id) {
    const student = await AppDataSource.manager.findOneBy(Student, {
      id: id,
    });

    return student;
  }
  async getStudents() {
    const student = await AppDataSource.getRepository(Student)
      .createQueryBuilder("student")
      .getMany();

    return student;
  }

  async putStudent(id, student: Student) {
    const newStudent = await AppDataSource.createQueryBuilder()
      .update(Student)
      .set({
        name: student.name,
        birthDate: student.birthDate,
        enrollment: student.enrollment,
        phone: student.phone,
        gender: student.gender,
      })
      .where("id = :id", { id: id })
      .execute();

    return newStudent;
  }
}
