import { Anamnese } from "../entities/Anamnese";
import { Dentist } from "../entities/Dentist";
import { Diagnosis } from "../entities/Diagnosis";
import { Student } from "../entities/Student";
import  AppDataSource from "./../data-source"

const createDentist = async () =>{
  const newDentist = new Dentist();
  newDentist.name = "Dr. João Silva";
  newDentist.crm = "12345";
  newDentist.email = "joao.silva@example.com";
  newDentist.password = "senha123";
  newDentist.siape = "67890";
  await AppDataSource.getRepository(Dentist).save(newDentist)

}

const createStudent = async () =>{
  const newStudent = new Student();
  newStudent.name = "Maria da Silva";
  newStudent.phone = "(11) 99999-9999";
  newStudent.birthDate = new Date("2000-05-15");
  newStudent.gender = "F";
  newStudent.enrollment = "20210001";
  await AppDataSource.getRepository(Student).save(newStudent)
}

const createDiagnosis = async () =>{
  const diagnosisRepository = AppDataSource.getRepository(Diagnosis);
  const dentistRepository = AppDataSource.getRepository(Dentist);
  const studentRepository = AppDataSource.getRepository(Student);

  // Encontre um dentista existente e um estudante existente pelo ID ou por algum critério
  const existingDentist = await dentistRepository.findOneBy({
    id: 1,
  })
  const existingStudent = await studentRepository.findOneBy({
    id: 1,
  })
  if (!existingDentist || !existingStudent) {
   console.error("Dentista ou estudante não encontrado.");
   return;
  }
 
  const newDiagnosis = new Diagnosis();
  newDiagnosis.date = new Date();
  newDiagnosis.description = "Descrição do diagnóstico";
  newDiagnosis.dentist = existingDentist.id;
  newDiagnosis.student = existingStudent.id;
 
  await diagnosisRepository.save(newDiagnosis);
}

const createAnamnese = async () =>{
  const anamneseRepository = AppDataSource.getRepository(Anamnese);
  const studentRepository = AppDataSource.getRepository(Student);

  // Encontre um estudante existente pelo ID
  const existingStudent = await studentRepository.findOneBy({
    id: 1,
  })
  const firstAnamnese = await anamneseRepository.findOneBy({
    student: existingStudent
  })
  if(firstAnamnese) return
  if (!existingStudent) {
    console.error("Estudante não encontrado.");
    return;
  }

  const newAnamnese = new Anamnese();
  newAnamnese.mainComplaint = "Dor de Cabeça";
  newAnamnese.questions = JSON.stringify([
    {
      question: '01- Está em tratamento médico?',
      options: ['Sim – Qual motivo?', 'Não'],
      response: 'nao',
      justification: "não"
    },
    {
      question: '02- Está usando medicamento?',
      options: ['Sim – Qual/dosagem?', 'Não'],
      response: 'nao',
      justification: "não"
    },
  ]);
  newAnamnese.student = existingStudent;
// console.log(newAnamnese.questions)
  await anamneseRepository.save(newAnamnese);

}

export const startSeeds = () =>{
  createDentist()
  createStudent().then(()=>{
    createDiagnosis()
    createAnamnese()
  })
  
}