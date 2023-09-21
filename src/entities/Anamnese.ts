import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, OneToOne } from "typeorm"
import { Student } from "./Student"
@Entity()
export class Anamnese {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    mainComplaint: string

    @Column({type: "jsonb"})
    questions:string;

    @OneToOne(() => Student, (student)=>student.id)
    @JoinColumn()
    student: Student
}
