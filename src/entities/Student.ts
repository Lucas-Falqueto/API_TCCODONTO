import { IsEmail } from "class-validator";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Diagnosis } from "./Diagnosis";
import { Anamnese } from "./Anamnese";

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  birthDate: Date;

  @Column()
  gender: string;

  @Column()
  enrollment: string;

  @OneToMany(() => Diagnosis, (diagnosis) => diagnosis.id)
  diagnosis: Diagnosis[];

  // constructor(name, phone, gender, birthDate, enrollment) {
  //   this.birthDate = birthDate;
  //   this.name = name;
  //   this.phone = phone;
  //   this.gender = gender;
  //   this.enrollment = enrollment;
  // }
  // @OneToOne(() => Anamnese, (anamnese)=>anamnese.id)
  // @JoinColumn()
  // anamneseID: Anamnese
}
